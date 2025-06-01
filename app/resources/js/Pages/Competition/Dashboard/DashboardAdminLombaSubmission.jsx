import { IconPreviewImageProfile } from "@/Components/IconAdmin";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { useFilter } from "@/Hooks/UseFilter";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { ArchiveBoxXMarkIcon, CheckBadgeIcon, ClockIcon, DocumentCheckIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { PiArrowLeft, PiArrowRight, PiArrowsClockwise, PiArrowsDownUp } from "react-icons/pi";
import { toast } from "sonner";

function DashboardAdminLombaSubmission({ ...props }) {
    const { flash_message } = usePage().props;
    const { data: submissions, meta, links } = props.submissions;
    const count_pending = usePage().props.count_pending;
    const count_verified = usePage().props.count_verified;
    const count_rejected = usePage().props.count_rejected;
    const [params, setParams] = useState(props.state);
    const show_competition_is_open_regis = usePage().props.show_competition_is_open_regis;


    // untuk modal identity
    const [modalIdentifyUserOpen, setModalIdentifyUserOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    // untuk modal reject
    const [modalFormOpen, setModalFormOpen] = useState(false);
    const [selectId, setSelectId] = useState(null);
    const hasShownToast = useRef(false);

    // modal verif
    const [modalVerifOpen, setModalVerifOpen] = useState(false);
    const [selectIdVerif, setSelectIdVerif] = useState(null);

    const { data, setData, post, put, patch, errors, processing, recentlySuccessful, formData, clearErrors, reset } = useForm({
        reject_reason: submissions.reject_reason ?? '',
        _method: 'POST',
    });

    const modalVerifOpenHandler = (id) => {
        setModalVerifOpen(true);
        setSelectIdVerif(id);
    };

    const closeModalVerif = () => {
        setSelectIdVerif(null);
        setModalVerifOpen(false);
        clearErrors();
        reset();
    };

    const onHandleVerif = (submissionId) => {
        post(route('dashboard.competition.admin-lomba.verif-submission', { id: submissionId }), {
            preserveScroll: true,
            onSuccess: () => closeModalVerif(),
        });
    };

    const modalIdentifyUserHandler = (user) => {
        setModalIdentifyUserOpen(true);
        setSelectedUser(user);
    };

    const modalFormOpenHandler = (id) => {
        setModalFormOpen(true);
        setSelectId(id);
    };

    const closeModal = () => {
        setSelectedUser(null);
        setModalIdentifyUserOpen(false);

        clearErrors();
        reset();
    };

    const closeModalForm = () => {
        setSelectId(null);
        setModalFormOpen(false);
        clearErrors();
        reset();
    };

    useEffect(() => {
        if (flash_message?.message) {
            toast[flash_message.type || 'success'](flash_message.message);
        }
    }, [flash_message]);

    const onHandleSubmit = (e, submissionId) => {

        e.preventDefault();

        if (!data.reject_reason) {
            if (!hasShownToast.current) {
                toast.error("Please enter reject reason.");
                hasShownToast.current = true;
            }
            return;
        }

        post(route('dashboard.competition.admin-lomba.reject-submission', { id: submissionId }), {
            onSuccess: () => {
                closeModalForm();
                hasShownToast.current = false;
            },
            preserveScroll: true,
            preserveState: true,
        });
    };

    useFilter({
        route: route('dashboard.competition.admin-lomba.submission'),
        values: params,
        only: ['submissions', 'params'],
    });

    const onSortable = (field) => {
        setParams({
            ...params,
            field: field,
            direction: params.direction === 'asc' ? 'desc' : 'asc',
        });
    };

    const handleExportCSV = () => {
        window.location.href = route('export.competition-submissions', {
            search: params.search,
        });
    };

    return (
        <>
            <div className="py-5">
                <div className="bg-white dark:bg-[#040529] p-4 shadow rounded-lg sm:p-8 flex flex-col gap-5 justify-between">
                    {/* start searching */}

                    <div className="gap-5 grid md:grid-cols-3 grid-cols-1">
                        <div className="border-2 border-[#E4F0F8] flex items-center flex-row gap-10 py-5 px-5 rounded-xl">
                            {/* start icon */}
                            <div className="flex justify-center items-center p-4 rounded-2xl bg-[#718EBF]/40">
                                <ClockIcon className="text-[#718EBF] w-8 h-8" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[#3A3A3A]/90 text-[16px] font-medium dark:text-white">Pending</p>
                                <p className="font-bold text-[24px] text-[#232323] dark:text-white">{count_pending}</p>
                            </div>

                        </div>
                        <div className="border-2 border-[#E4F0F8] flex items-center flex-row gap-10 py-5 px-5 rounded-xl">
                            <div className="flex justify-center items-center p-4 rounded-2xl bg-[#4DE45C]/20">
                                <CheckBadgeIcon className="text-[#4DE45C] w-8 h-8" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[#3A3A3A]/90 text-[16px] font-medium dark:text-white">Verified</p>
                                <p className="font-bold text-[24px] text-[#232323] dark:text-white">{count_verified}</p>
                            </div>
                        </div>

                        <div className="border-2 border-[#E4F0F8] flex items-center flex-row gap-10 py-5 px-5 rounded-xl">
                            <div className="flex justify-center items-center p-4 rounded-2xl bg-[#E82323]/20">
                                <ArchiveBoxXMarkIcon className="text-[#E82323] w-8 h-8" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[#3A3A3A]/90 text-[16px] font-medium dark:text-white">Rejected</p>
                                <p className="font-bold text-[24px] text-[#232323] dark:text-white">{count_rejected}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full md:flex-row flex-col justify-between mt-4">
                        <div className="flex md:flex-row flex-col gap-4 w-full">
                            <Input
                                className="w-full sm:w-1/4 outline-none ring-0 focus-visible:ring-0 dark:border-white placeholder:dark:text-white"
                                placeholder="Search"
                                value={params?.search}
                                onChange={(e) => setParams((prev) => ({ ...prev, search: e.target.value }))}

                            />
                            <Select value={params?.load} onValueChange={(e) => setParams({ ...params, load: e })}>
                                <SelectTrigger className="w-full h-9 sm:w-24 dark:bg-[#0F114C] dark:border-white dark:text-white"  >
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
                                value={params?.submission_status}
                                onValueChange={(e) => setParams({ ...params, submission_status: e })}
                            >
                                <SelectTrigger className="w-full h-9 sm:w-40 dark:bg-[#0F114C] dark:border-white dark:text-white"  >
                                    <SelectValue placeholder="Filter by Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    {['Verified', 'Pending', 'Requested', 'Rejected'].map((submission_status, index) => (
                                        <SelectItem key={index} value={submission_status}>
                                            {submission_status}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Button variant="outline" onClick={() => setParams(props.state)} className="dark:bg-[#0F114C] dark:border-white"  >
                                <PiArrowsClockwise className="mr-2 h-5 w-5" />
                                Clear Filter
                            </Button>
                        </div>
                        <Button variant="blue" type="button" onClick={handleExportCSV} className="dark:bg-[#0F114C] dark:border-white dark:border"  >
                            Export CSV
                        </Button>
                    </div>

                    <Card className="dark:bg-[#040529] dark:border dark:border-white rounded-xl"  >
                        <CardContent className="overflow-hidden">
                            <div className="my-8">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-5 lg:-mx-8">
                                    <div className="inline-block w-full py-2 align-middle sm:px-2">
                                        <table className="w-full text-left border border-white">
                                            <thead>
                                                <tr className="bg-gray-50 dark:bg-[#3237c4]">
                                                    <th
                                                        className="5 font-semibold px-2 py-3 text-left text-sm text-foreground"
                                                        scope="col"
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            className="group inline-flex hover:dark:bg-[#0F114C]"
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
                                                            className="group inline-flex hover:dark:bg-[#0F114C]"
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
                                                            className="group inline-flex hover:dark:bg-[#0F114C]"
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
                                                            className="group inline-flex hover:dark:bg-[#0F114C]"
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
                                                            className="group inline-flex hover:dark:bg-[#0F114C]"
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
                                                            className="group inline-flex hover:dark:bg-[#0F114C]"
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
                                                            className="group inline-flex hover:dark:bg-[#0F114C]"
                                                        >
                                                            Submission Link
                                                        </Button>
                                                    </th>
                                                    <th
                                                        className="5 font-semibold px-2 py-3 text-left text-sm text-foreground"
                                                        scope="col"
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            className="group inline-flex hover:dark:bg-[#0F114C]"
                                                            onClick={() => onSortable('submission_status')}
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
                                                            className="group inline-flex hover:dark:bg-[#0F114C]"
                                                        >
                                                            Action
                                                        </Button>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {submissions.map((submission, index) => (
                                                    <tr key={index}>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            {index + 1}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            {submission?.competition_registrations?.competitions?.is_team ? submission.competition_registrations?.teams?.team_name : submission.competition_registrations.user.name}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            {submission?.competition_registrations?.competitions?.name}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            {/* {submission?.competition_registrations?.competitions?.is_team ? '-' : submission.competition_registrations.code_registration} */}
                                                            {submission?.competition_registrations?.competitions?.is_team ? (
                                                                <div>
                                                                    <Dialog>
                                                                        <DialogTrigger className='flex flex-row gap-3 justify-center items-center text-foreground font-normal'>
                                                                            Teams
                                                                            <IconPreviewImageProfile />
                                                                        </DialogTrigger>
                                                                        <DialogContent className="max-w-3xl dark:bg-[#0F114C]">
                                                                            <DialogTitle className="mb-4">
                                                                                Code Registraions
                                                                            </DialogTitle>
                                                                            <Table>
                                                                                <TableHeader>
                                                                                    <TableRow>
                                                                                        <TableHead className="font-medium text-[#000000] dark:text-white">
                                                                                            No
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000] dark:text-white">
                                                                                            Name
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000] dark:text-white">
                                                                                            Code Registration
                                                                                        </TableHead>
                                                                                    </TableRow>
                                                                                </TableHeader>
                                                                                <TableBody>
                                                                                    {submission.competition_registrations?.teams?.team_members.map((team_member, index) => (
                                                                                        <TableRow key={index}>
                                                                                            <TableCell className="font-normal">
                                                                                                {index + 1}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member?.competition_registrations?.user.name}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member?.competition_registrations?.code_registration}
                                                                                            </TableCell>
                                                                                        </TableRow>
                                                                                    ))}
                                                                                </TableBody>
                                                                            </Table>
                                                                        </DialogContent>
                                                                    </Dialog>
                                                                </div>
                                                            ) : submission.competition_registrations.code_registration}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            {submission?.competition_registrations?.competitions?.is_team ? 'Team' : 'Individual'}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            {submission?.competition_registrations?.competitions?.is_team ? (
                                                                <div>
                                                                    <Dialog>
                                                                        <DialogTrigger className='flex flex-row gap-3 justify-center items-center text-foreground font-normal'>
                                                                            Members
                                                                            <IconPreviewImageProfile />
                                                                        </DialogTrigger>
                                                                        <DialogContent className="max-w-3xl dark:bg-[#0F114C]">
                                                                            <DialogTitle className="mb-4">
                                                                                Team Members
                                                                            </DialogTitle>
                                                                            <Table>
                                                                                <TableHeader>
                                                                                    <TableRow>
                                                                                        <TableHead className="font-medium text-[#000000] dark:text-white">
                                                                                            No
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000] dark:text-white">
                                                                                            Name
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000] dark:text-white">
                                                                                            NIM
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000] dark:text-white">
                                                                                            Address
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000] dark:text-white">
                                                                                            Institution
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000] dark:text-white">
                                                                                            Status
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000] dark:text-white">
                                                                                            Email
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000] dark:text-white">
                                                                                            Phone number
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000] dark:text-white">
                                                                                            Line ID
                                                                                        </TableHead>
                                                                                        <TableHead className="font-medium text-[#000000] dark:text-white">
                                                                                            Institution Card
                                                                                        </TableHead>
                                                                                    </TableRow>
                                                                                </TableHeader>
                                                                                <TableBody>
                                                                                    {submission.competition_registrations?.teams?.team_members.map((team_member, index) => (
                                                                                        <TableRow key={index}>
                                                                                            <TableCell className="font-normal">
                                                                                                {index + 1}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member?.competition_registrations?.user.name}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member?.competition_registrations?.user.nim}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member?.competition_registrations?.user.address}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member?.competition_registrations?.user.institution}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member?.competition_registrations?.user.status}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member?.competition_registrations?.user.email}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member?.competition_registrations?.user.phone_number}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                {team_member?.competition_registrations?.user.line_id}
                                                                                            </TableCell>
                                                                                            <TableCell className="font-normal">
                                                                                                <Dialog>
                                                                                                    <DialogTrigger className='flex flex-row gap-3 justify-center items-center text-foreground font-normal'>
                                                                                                        Institution Card
                                                                                                        <IconPreviewImageProfile />
                                                                                                    </DialogTrigger>
                                                                                                    <DialogContent className="dark:bg-[#0F114C] ">
                                                                                                        <DialogTitle>
                                                                                                            Institution Card
                                                                                                        </DialogTitle>
                                                                                                        <img src={team_member?.competition_registrations?.user.institution_path ? `${team_member?.competition_registrations?.user.institution_path}` : 'assets/images/default_image_profile.png'} className="h-64 w-auto" alt="" />
                                                                                                        <a href={team_member?.competition_registrations?.user.institution_path ? `${team_member?.competition_registrations?.user.institution_path}` : 'assets/images/default_image_profile.png'} className="text-center" target="_blank" rel="noopener noreferrer">Open in new tab</a>
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
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground ">
                                                            <a href={submission.submission_link} className='flex flex-row gap-3 justify-center items-center text-foreground font-normal' target="_blank" rel="noopener noreferrer">
                                                                Link
                                                                <IconPreviewImageProfile />
                                                            </a>
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            <Badge
                                                                className={`
                                                                ${submission.submission_status === 'Pending' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}
                                                                ${submission.submission_status === 'Verified' ? 'bg-green-500 hover:bg-green-600' : ''}
                                                                ${submission.submission_status === 'Rejected' ? 'bg-red-500 hover:bg-red-600' : ''}
                                                                ${submission.submission_status === 'Requested' ? 'bg-indigo-500 hover:bg-indigo-600' : ''}
                                                                py-2 px-2
                                                                `}
                                                            >
                                                                {submission.submission_status}
                                                            </Badge>
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 flex md:flex-row gap-2">
                                                            {submission.submission_status === 'Requested' ? (
                                                                <Link
                                                                    className="flex justify-center items-center border-2 rounded-md border-[#4DE45C] p-1.5 hover:bg-[#4DE45C]/20 transition-all duration-300 ease-in-out cursor-not-allowed"
                                                                    href={route('dashboard.competition.admin-lomba.verif-submission', { id: submission.id })}
                                                                    method="post"
                                                                    disabled>
                                                                    <DocumentCheckIcon className="text-[#4DE45C] w-5 h-5" />
                                                                </Link>
                                                            ) : (

                                                                <div>
                                                                    <Button
                                                                        variant="none"
                                                                        className="flex justify-center items-center border-2 rounded-md border-[#4DE45C] p-1.5 hover:bg-[#4DE45C]/20 transition-all duration-300 ease-in-out"
                                                                        onClick={() => modalVerifOpenHandler(submission.id)}
                                                                    >
                                                                        <DocumentCheckIcon className="text-[#4DE45C] w-5 h-5" />
                                                                    </Button>

                                                                    <Modal show={modalVerifOpen} onClose={closeModalVerif} maxWidth="md" className="p-4 dark:bg-[#0F172A]">
                                                                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                                            Confirmation Of Payment Verification
                                                                        </h2>

                                                                        <p className="mt-1 text-sm text-gray-600 dark:text-white">
                                                                            You will not be able to revert this action.
                                                                        </p>

                                                                        <div className="mt-6 flex justify-end">
                                                                            <Button onClick={closeModalVerif} variant="red" type="button">Cancel</Button>

                                                                            <Button
                                                                                className="ms-3"
                                                                                variant="blue"
                                                                                type="submit"
                                                                                disabled={processing}
                                                                                onClick={() => onHandleVerif(selectIdVerif)}
                                                                            >
                                                                                Confirm
                                                                            </Button>
                                                                        </div>
                                                                    </Modal>
                                                                </div>
                                                            )}

                                                            <Button
                                                                variant="none"
                                                                className="flex justify-center items-center border-2 rounded-md border-[#E82323] p-1.5 hover:bg-[#E82323]/20 transition-all duration-300 ease-in-out"
                                                                onClick={() => modalFormOpenHandler(submission.id)}>
                                                                <XCircleIcon className="text-[#E82323] w-5 h-5" />
                                                            </Button>

                                                            <Modal show={modalFormOpen} onClose={closeModalForm} maxWidth="md" className="p-4 dark:bg-[#0F172A]">
                                                                <form onSubmit={(e) => onHandleSubmit(e, selectId)}>
                                                                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Please input a reject reason</h2>

                                                                    <p className="mt-1 text-sm text-gray-600 dark:text-white">
                                                                        You will not be able to revert this action.
                                                                    </p>

                                                                    <div className="mt-6">

                                                                        <TextInput
                                                                            id="reject_reason"
                                                                            type="reject_reason"
                                                                            name="reject_reason"
                                                                            value={data.reject_reason}
                                                                            onChange={(e) => setData('reject_reason', e.target.value)}
                                                                            className="mt-1 block w-3/4"
                                                                            isFocused
                                                                            placeholder="Reject Reason"
                                                                        />

                                                                        <InputError message={errors.reject_reason} className="mt-2" />
                                                                    </div>

                                                                    <div className="mt-6 flex justify-end">
                                                                        <Button onClick={closeModalForm} variant="blue" type="button">Cancel</Button>

                                                                        <Button className="ms-3" variant="red" type="submit" disabled={processing}>
                                                                            Reject
                                                                        </Button>
                                                                    </div>
                                                                </form>
                                                            </Modal>
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
                            <p className="text-sm text-muted-foreground dark:text-white">
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

                    <p className="text-[14px] font-normal text-[#5E5E5E] mt-3 dark:text-white">
                        *Make sure to download the current submission file before verification, as it will be replaced if the user uploads a new one.
                    </p>
                </div>
            </div>
        </>
    );
}

export default DashboardAdminLombaSubmission;
DashboardAdminLombaSubmission.layout = (page) => <DashboardLayout children={page} title="Admin Competition Submission" header="Admin Competition Submission" description="Manage competition submissions in this page" />
