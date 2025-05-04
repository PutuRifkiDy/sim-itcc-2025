import { IconPreviewImageProfile } from "@/Components/IconAdmin";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { useFilter } from "@/Hooks/UseFilter";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { PiArrowLeft, PiArrowRight, PiArrowsClockwise, PiArrowsDownUp } from "react-icons/pi";

function DashboardAdminLombaData({ ...props }) {
    const { data: competition_registrations, meta, links } = props.competition_registrations;
    const show_competition_is_open_regis = usePage().props.show_competition_is_open_regis;
    const [params, setParams] = useState(props.state);

    console.log('cek isi', competition_registrations);
    const [modalIdentifyUserOpen, setModalIdentifyUserOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const modalIdentifyUserHandler = (user) => {
        setModalIdentifyUserOpen(true);
        setSelectedUser(user);
    };

    const closeModal = () => {
        setSelectedUser(null);
        setModalIdentifyUserOpen(false);

        clearErrors();
        reset();
    };

    useFilter({
        route: route('dashboard.competition.admin-lomba.index'),
        values: params,
        only: ['competition_registrations', 'params'],
    });

    const onSortable = (field) => {
        setParams({
            ...params,
            field: field,
            direction: params.direction === 'asc' ? 'desc' : 'asc',
        });
    };

    const handleExportCSV = () => {
        window.location.href = route('export.competition-participants', {
            search: params.search,
        });
    };
    return (
        <>
            <div className="py-5">

                <div className="bg-white p-4 shadow rounded-lg sm:p-8 flex flex-col gap-5 justify-between">

                    <div className="flex w-full md:flex-row flex-col justify-between mt-4">
                        <div className="flex md:flex-row flex-col gap-4 w-full">
                            <Input
                                className="w-full sm:w-1/4 outline-none ring-0 focus-visible:ring-0"
                                placeholder="Search"
                                value={params?.search}
                                onChange={(e) => setParams((prev) => ({ ...prev, search: e.target.value }))}
                            />
                            <Select value={params?.load} onValueChange={(e) => setParams({ ...params, load: e })}>
                                <SelectTrigger className="w-full h-9 sm:w-24">
                                    <SelectValue placeholder="Load" />
                                </SelectTrigger>
                                <SelectContent>
                                    {[10, 25, 50, 75, 100].map((number, index) => (
                                        <SelectItem key={index} value={number}>
                                            {number}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select
                                value={params?.competition_name}
                                onValueChange={(e) => setParams({ ...params, competition_name: e })}
                            >
                                <SelectTrigger className="w-full h-9 sm:w-40">
                                    <SelectValue placeholder="Filter by Competition" />
                                </SelectTrigger>
                                <SelectContent>
                                    {show_competition_is_open_regis.map((competition, index) => (
                                        <SelectItem key={index} value={competition.name}>
                                            {competition.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Button variant="outline" onClick={() => setParams(props.state)}>
                                <PiArrowsClockwise className="mr-2 h-5 w-5" />
                                Clear Filter
                            </Button>
                        </div>
                        <Button variant="blue" type="button" onClick={handleExportCSV}>
                            Export CSV
                        </Button>
                    </div>

                    <Card>
                        <CardContent className="overflow-hidden">
                            <div className="my-8">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-5 lg:-mx-8">
                                    <div className="inline-block w-full py-2 align-middle sm:px-2">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="bg-gray-50">
                                                    <th
                                                        className="5 font-semibold px-2 py-3 text-left text-sm text-foreground"
                                                        scope="col"
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            className="group inline-flex"
                                                        >
                                                            No
                                                        </Button>
                                                    </th>
                                                    <th
                                                        className="5 font-semibold px-2 py-3 text-left text-sm text-foreground"
                                                        scope="col"
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            className="group inline-flex"
                                                        >
                                                            Name
                                                        </Button>
                                                    </th>
                                                    <th
                                                        className="5 font-semibold px-2 py-3 text-left text-sm text-foreground"
                                                        scope="col"
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            className="group inline-flex"
                                                        >
                                                            Competition Name
                                                        </Button>
                                                    </th>
                                                    <th
                                                        className="5 font-semibold px-2 py-3 text-left text-sm text-foreground"
                                                        scope="col"
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            className="group inline-flex"
                                                        >
                                                            Code Registration
                                                        </Button>
                                                    </th>
                                                    <th
                                                        className="5 font-semibold px-2 py-3 text-left text-sm text-foreground"
                                                        scope="col"
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            className="group inline-flex"
                                                        >
                                                            Type
                                                        </Button>
                                                    </th>
                                                    <th
                                                        className="5 font-semibold px-2 py-3 text-left text-sm text-foreground"
                                                        scope="col"
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            className="group inline-flex"
                                                        >
                                                            Proof Payment
                                                        </Button>
                                                    </th>
                                                    <th
                                                        className="5 font-semibold px-2 py-3 text-left text-sm text-foreground"
                                                        scope="col"
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            className="group inline-flex"
                                                        >
                                                            Identity
                                                        </Button>
                                                    </th>
                                                    <th
                                                        className="5 font-semibold px-2 py-3 text-left text-sm text-foreground"
                                                        scope="col"
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            className="group inline-flex"
                                                            onClick={() => onSortable('payment_status')}
                                                        >
                                                            Status
                                                            <span className="ml-2 flex-none rounded text-foreground">
                                                                <PiArrowsDownUp className="h-5 w-5" />
                                                            </span>
                                                        </Button>
                                                    </th>
                                                    <th
                                                        className="5 font-semibold px-2 py-3 text-left text-sm text-foreground"
                                                        scope="col"
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            className="group inline-flex"
                                                            onClick={() => onSortable('total_payment')}
                                                        >
                                                            Total
                                                            <span className="ml-2 flex-none rounded text-foreground">
                                                                <PiArrowsDownUp className="h-5 w-5" />
                                                            </span>
                                                        </Button>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {competition_registrations.map((competition, index) => (
                                                    <tr key={index}>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            {index + 1}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            {competition.competitions.is_team ? competition.teams.team_name : competition.user.name}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            {competition.competitions.name}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            {competition.competitions.is_team ? (
                                                                <div>
                                                                    <Dialog>
                                                                        <DialogTrigger className='flex flex-row gap-3 justify-center items-center text-foreground font-normal'>
                                                                            Teams
                                                                            <IconPreviewImageProfile />
                                                                        </DialogTrigger>
                                                                        <DialogContent className="max-w-3xl">
                                                                            <DialogTitle className="mb-4">
                                                                                Code Registraions
                                                                            </DialogTitle>
                                                                            <Table>
                                                                                <TableHeader>
                                                                                    <TableRow>
                                                                                        <TableHead className="font-medium text-[#000000]">
                                                                                            No
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000]">
                                                                                            Name
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000]">
                                                                                            Code Registration
                                                                                        </TableHead>
                                                                                    </TableRow>
                                                                                </TableHeader>
                                                                                <TableBody>
                                                                                    {competition.teams.team_members.map((team_member, index) => (
                                                                                        <TableRow key={index}>
                                                                                            <TableCell className="font-normal">
                                                                                                {index + 1}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member.competition_registrations.user.name}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member.competition_registrations.code_registration}
                                                                                            </TableCell>
                                                                                        </TableRow>
                                                                                    ))}
                                                                                </TableBody>
                                                                            </Table>
                                                                        </DialogContent>
                                                                    </Dialog>
                                                                </div>
                                                            ) : competition.code_registration}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            {competition.competitions.competition_content[0].location}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            <Dialog>
                                                                <DialogTrigger className='flex flex-row gap-3 justify-center items-center text-foreground font-normal'>
                                                                    Open
                                                                    <IconPreviewImageProfile />
                                                                </DialogTrigger>
                                                                <DialogContent>
                                                                    <DialogTitle>
                                                                        Proof Payment
                                                                    </DialogTitle>
                                                                    <img src={competition.payment_proof_path ? `${competition.payment_proof_path}` : 'assets/images/default_image_profile.png'} className="h-64 w-auto" alt="" />
                                                                    <a href={competition.payment_proof_path ? `${competition.payment_proof_path}` : 'assets/images/default_image_profile.png'} className="text-center" target="_blank" rel="noopener noreferrer">Open in new tab</a>
                                                                </DialogContent>
                                                            </Dialog>
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            {competition.competitions.is_team ? (
                                                                <div>
                                                                    <Dialog>
                                                                        <DialogTrigger className='flex flex-row gap-3 justify-center items-center text-foreground font-normal'>
                                                                            Members
                                                                            <IconPreviewImageProfile />
                                                                        </DialogTrigger>
                                                                        <DialogContent className="max-w-3xl">
                                                                            <DialogTitle className="mb-4">
                                                                                Team Members
                                                                            </DialogTitle>
                                                                            <Table>
                                                                                <TableHeader>
                                                                                    <TableRow>
                                                                                        <TableHead className="font-medium text-[#000000]">
                                                                                            No
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000]">
                                                                                            Name
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000]">
                                                                                            NIM
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000]">
                                                                                            Address
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000]">
                                                                                            Institution
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000]">
                                                                                            Status
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000]">
                                                                                            Email
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000]">
                                                                                            Phone number
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000]">
                                                                                            Line ID
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000]">
                                                                                            Institution Card
                                                                                        </TableHead>
                                                                                    </TableRow>
                                                                                </TableHeader>
                                                                                <TableBody>
                                                                                    {competition.teams.team_members.map((team_member, index) => (
                                                                                        <TableRow key={index}>
                                                                                            <TableCell className="font-normal">
                                                                                                {index + 1}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member.competition_registrations.user.name}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member.competition_registrations.user.nim}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member.competition_registrations.user.address}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member.competition_registrations.user.institution}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member.competition_registrations.user.status}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member.competition_registrations.user.email}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member.competition_registrations.user.phone_number}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member.competition_registrations.user.line_id}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                <Dialog>
                                                                                                    <DialogTrigger className='flex flex-row gap-3 justify-center items-center text-foreground font-normal'>
                                                                                                        Institution Card
                                                                                                        <IconPreviewImageProfile />
                                                                                                    </DialogTrigger>
                                                                                                    <DialogContent>
                                                                                                        <DialogTitle>
                                                                                                            Institution Card
                                                                                                        </DialogTitle>
                                                                                                        <img src={team_member.competition_registrations.user.institution_path ? `${team_member.competition_registrations.user.institution_path}` : 'assets/images/default_image_profile.png'} className="h-64 w-auto" alt="" />
                                                                                                        <a href={team_member.competition_registrations.user.institution_path ? `${team_member.competition_registrations.user.institution_path}` : 'assets/images/default_image_profile.png'} className="text-center" target="_blank" rel="noopener noreferrer">Open in new tab</a>
                                                                                                    </DialogContent>
                                                                                                </Dialog>

                                                                                            </TableCell>
                                                                                        </TableRow>
                                                                                    ))}
                                                                                </TableBody>
                                                                            </Table>
                                                                        </DialogContent>
                                                                    </Dialog>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <Button
                                                                        variant='none'
                                                                        className="flex flex-row gap-3 justify-center items-center text-foreground font-normal"
                                                                        onClick={() => modalIdentifyUserHandler(competition.user)}
                                                                    >
                                                                        Open
                                                                        <IconPreviewImageProfile />
                                                                    </Button>
                                                                    <Modal show={modalIdentifyUserOpen} onClose={closeModal} className="px-5 py-5">
                                                                        <h2 className="text-lg font-bold text-gray-900">Identity User</h2>
                                                                        <div className='mt-10 grid md:grid-cols-2 grid-cols-1 gap-5'>
                                                                            <div>
                                                                                <InputLabel htmlFor="name" value="Name" className='text-[12px] text-[#676767] font-normal' />
                                                                                <p>{selectedUser?.name}</p>
                                                                            </div>
                                                                            <div>
                                                                                <InputLabel htmlFor="email" value="Email" className='text-[12px] text-[#676767] font-normal' />
                                                                                <p>{selectedUser?.email}</p>
                                                                            </div>
                                                                            <div>
                                                                                <InputLabel htmlFor="nim" value="NIM" className='text-[12px] text-[#676767] font-normal' />
                                                                                <p>{selectedUser?.nim ?? '-'}</p>
                                                                            </div>
                                                                            <div>
                                                                                <InputLabel htmlFor="phone_number" value="Phone Number" className='text-[12px] text-[#676767] font-normal' />
                                                                                <p>{selectedUser?.phone_number ? selectedUser?.phone_number : '-'}</p>
                                                                            </div>
                                                                            <div>
                                                                                <InputLabel htmlFor="address" value="Address" className='text-[12px] text-[#676767] font-normal' />
                                                                                <p>{selectedUser?.address ? selectedUser?.address : '-'}</p>
                                                                            </div>
                                                                            <div>
                                                                                <InputLabel htmlFor="line_id" value="Line ID" className='text-[12px] text-[#676767] font-normal' />
                                                                                <p>{selectedUser?.line_id ? selectedUser?.line_id : '-'}</p>
                                                                            </div>
                                                                            <div>
                                                                                <InputLabel htmlFor="institution" value="Institution" className='text-[12px] text-[#676767] font-normal' />
                                                                                <p>{selectedUser?.institution ? selectedUser?.institution : '-'}</p>
                                                                            </div>
                                                                            <div>
                                                                                <Dialog>
                                                                                    <DialogTrigger className='flex flex-row gap-3 justify-center items-center text-foreground font-normal'>
                                                                                        Institution Card
                                                                                        <IconPreviewImageProfile />
                                                                                    </DialogTrigger>
                                                                                    <DialogContent>
                                                                                        <DialogTitle>
                                                                                            Institution Card
                                                                                        </DialogTitle>
                                                                                        <img src={selectedUser?.institution_path ? selectedUser?.institution_path : 'assets/images/default_image_profile.png'} className="h-64 w-auto" alt="" />
                                                                                        <a href={selectedUser?.institution_path ? `${selectedUser?.institution_path}` : 'assets/images/default_image_profile.png'} className="text-center" target="_blank" rel="noopener noreferrer">Open in new tab</a>
                                                                                    </DialogContent>
                                                                                </Dialog>
                                                                            </div>
                                                                            <div>
                                                                                <InputLabel htmlFor="status" value="Status" className='text-[12px] text-[#676767] font-normal' />
                                                                                <p>{selectedUser?.status ? selectedUser?.status : '-'}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mt-6 flex justify-end">
                                                                            <Button onClick={closeModal} variant="blue" type="button">Close</Button>
                                                                        </div>
                                                                    </Modal>
                                                                </div>
                                                            )}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            <Badge
                                                                className={`
                                                                ${competition.payment_status === 'Pending' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}
                                                                ${competition.payment_status === 'Verified' ? 'bg-green-500 hover:bg-green-600' : ''}
                                                                ${competition.payment_status === 'Rejected' ? 'bg-red-500 hover:bg-red-600' : ''}
                                                                ${competition.payment_status === 'Requested' ? 'bg-indigo-500 hover:bg-indigo-600' : ''}
                                                                py-2 px-2
                                                                `}
                                                            >
                                                                {competition.payment_status}
                                                            </Badge>
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            Rp.{" "}{competition.total_payment}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="justify-between border-t pt-6 text-sm text-muted-foreground">
                            <p className="text-sm text-muted-foreground">
                                Showing <span className="font-normal text-[#4880FF]">{meta.from}</span> of {meta.total}
                            </p>
                            {meta.has_page && (
                                <div className="flex items-center gap-x-1">
                                    <Button size="sm" variant="blue" asChild>
                                        {links.prev ? (
                                            <Link href={links.prev}>
                                                <PiArrowLeft className="-ml-1 mr-1 size-4" />
                                            </Link>
                                        ) : (
                                            <span>Prev</span>
                                        )}
                                    </Button>
                                    {meta.links.slice(1, -1).map((link, index) => (
                                        <Button key={index} size="sm" variant="outline" asChild>
                                            <Link href={link.url}>{link.label}</Link>
                                        </Button>
                                    ))}
                                    <Button size="sm" variant="blue" asChild>
                                        {links.next ? (
                                            <Link href={links.next}>
                                                Next <PiArrowRight className="-mr-1 ml-1 size-4" />
                                            </Link>
                                        ) : (
                                            <span>Next</span>
                                        )}
                                    </Button>
                                </div>
                            )}
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default DashboardAdminLombaData;
DashboardAdminLombaData.layout = (page) => <DashboardLayout children={page} title="Admin Competition Participant" header="Admin Competition Participant" />
