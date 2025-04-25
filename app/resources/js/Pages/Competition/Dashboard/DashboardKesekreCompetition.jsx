import { IconPreviewImageProfile } from "@/Components/IconAdmin";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { useFilter } from "@/Hooks/UseFilter";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { ArchiveBoxXMarkIcon, CheckBadgeIcon, ClockIcon, DocumentCheckIcon, PaperAirplaneIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { PiArrowsClockwise, PiArrowsDownUp } from "react-icons/pi";
import { toast } from "sonner";

function DashboardKesekreCompetition({ ...props }) {
    const count_verified = usePage().props.count_verified;
    const count_pending = usePage().props.count_pending;
    const count_rejected = usePage().props.count_rejected;
    const count_requested = usePage().props.count_requested;
    const { flash_message } = usePage().props;
    const { data: admin_competition_registrations, meta, links } = props.admin_competition_registrations;
    const [params, setParams] = useState(props.state);

    const [modalIdentifyUserOpen, setModalIdentifyUserOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalFormOpen, setModalFormOpen] = useState(false);
    const [selectId, setSelectId] = useState(null);
    const hasShownToast = useRef(false);


    const { data, setData, post, put, patch, errors, processing, recentlySuccessful, formData, clearErrors, reset } = useForm({
        reject_reason: admin_competition_registrations.reject_reason ?? '',
        _method: 'POST',
    });

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

    const onHandleSubmit = (e, competitionId) => {

        e.preventDefault();

        if (!data.reject_reason) {
            if (!hasShownToast.current) {
                toast.error("Please enter reject reason.");
                hasShownToast.current = true;
            }
            return;
        }


        post(route('dashboard.competition.admin-kesekre.reject', { id: competitionId }), {
            onSuccess: () => {
                closeModalForm();
                hasShownToast.current = false;
            },
            preserveScroll: true,
            preserveState: true,
        });
    };

    useFilter({
        route: route('dashboard.competition.admin-kesekre.index'),
        values: params,
        only: ['admin_competition_registrations', 'params'],
    });

    const onSortable = (field) => {
        setParams({
            ...params,
            field: field,
            direction: params.direction === 'asc' ? 'desc' : 'asc',
        });
    };

    const handleExportCSV = () => {
        window.location.href = route('export.competition-registrations', {
            search: params.search,
        });
    };

    return (
        <>
            <div className="py-5">
                <div className="bg-white p-4 shadow rounded-lg sm:p-8 flex flex-col gap-5 justify-between">
                    {/* start searching */}

                    <div className="flex md:flex-row flex-col gap-5 justify-between">
                        {/* ada 3 div untuk count requested, pending, sama rejected*/}
                        <div className="border-2 border-[#E4F0F8] flex justify-center items-center flex-row gap-5 py-4 px-10 rounded-xl">
                            {/* start icon */}
                            <div className="flex justify-center items-center p-4 rounded-2xl bg-[#718EBF]/40">
                                <PaperAirplaneIcon className="text-[#718EBF] w-6 h-6" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[#718EBF] text-[14px] font-normal">Requested</p>
                                <p className="font-semibold text-[24px] text-[#232323]">{count_requested}</p>
                            </div>

                        </div>
                        <div className="border-2 border-[#E4F0F8] flex justify-center items-center flex-row gap-5 py-4 px-10 rounded-xl">
                            {/* start icon */}
                            <div className="flex justify-center items-center p-4 rounded-2xl bg-[#FFC300]/20">
                                <ClockIcon className="text-[#FFC300] w-6 h-6" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[#718EBF] text-[14px] font-normal">Pending</p>
                                <p className="font-semibold text-[24px] text-[#232323]">{count_pending}</p>
                            </div>

                        </div>
                        <div className="border-2 border-[#E4F0F8] flex justify-center items-center flex-row gap-5 py-4 px-10 rounded-xl">
                            {/* start icon */}
                            <div className="flex justify-center items-center p-4 rounded-2xl bg-[#4DE45C]/20">
                                <CheckBadgeIcon className="text-[#4DE45C] w-6 h-6" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[#718EBF] text-[14px] font-normal">Verified</p>
                                <p className="font-semibold text-[24px] text-[#232323]">{count_verified}</p>
                            </div>

                        </div>
                        <div className="border-2 border-[#E4F0F8] flex justify-center items-center flex-row gap-5 py-4 px-10 rounded-xl">
                            {/* start icon */}
                            <div className="flex justify-center items-center p-4 rounded-2xl bg-[#E82323]/20">
                                <ArchiveBoxXMarkIcon className="text-[#E82323] w-6 h-6" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[#718EBF] text-[14px] font-normal">Rejected</p>
                                <p className="font-semibold text-[24px] text-[#232323]">{count_rejected}</p>
                            </div>
                        </div>
                    </div>

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
                            <Button variant="outline" onClick={() => setParams(props.state)}>
                                <PiArrowsClockwise className="mr-2 h-5 w-5" />
                                Clear
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
                                                    <th
                                                        className="5 font-semibold px-2 py-3 text-left text-sm text-foreground"
                                                        scope="col"
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            className="group inline-flex"
                                                        >
                                                            Action
                                                        </Button>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {admin_competition_registrations.map((competition, index) => (
                                                    <tr key={index}>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            {index + 1}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            {competition.user.name}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-normal text-foreground">
                                                            {competition.code_registration}
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
                                                            <Button
                                                                variant='none'
                                                                className="flex flex-row gap-3 justify-center items-center text-foreground font-normal"
                                                                onClick={() => modalIdentifyUserHandler(competition.user)}
                                                            >
                                                                Open
                                                                <IconPreviewImageProfile />
                                                            </Button>
                                                            <Modal show={modalIdentifyUserOpen} onClose={closeModal} className="px-5 py-5">
                                                                <h2 className="text-lg font-normal text-gray-900">Identity User</h2>
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
                                                                    <Button onClick={closeModal} variant="blue" type="button">Cancel</Button>
                                                                </div>
                                                            </Modal>
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
                                                        <td className="whitespace-nowrap px-6 py-8 flex md:flex-row gap-2">
                                                            {competition.payment_status === 'Requested' ? (
                                                                <Link
                                                                    className="flex justify-center items-center border-2 rounded-md border-[#4DE45C] p-1.5 hover:bg-[#4DE45C]/20 transition-all duration-300 ease-in-out cursor-not-allowed"
                                                                    href={route('dashboard.competition.admin-kesekre.payment', { id: competition.id })}
                                                                    method="post"
                                                                    disabled>
                                                                    <DocumentCheckIcon className="text-[#4DE45C] w-5 h-5" />
                                                                </Link>
                                                            ) : (

                                                                <Link
                                                                    className="flex justify-center items-center border-2 rounded-md border-[#4DE45C] p-1.5 hover:bg-[#4DE45C]/20 transition-all duration-300 ease-in-out"
                                                                    href={route('dashboard.competition.admin-kesekre.payment', { id: competition.id })}
                                                                    method="post">
                                                                    <DocumentCheckIcon className="text-[#4DE45C] w-5 h-5" />
                                                                </Link>
                                                            )}

                                                            <Button
                                                                variant="none"
                                                                className="flex justify-center items-center border-2 rounded-md border-[#E82323] p-1.5 hover:bg-[#E82323]/20 transition-all duration-300 ease-in-out"
                                                                onClick={() => modalFormOpenHandler(competition.id)}>
                                                                <XCircleIcon className="text-[#E82323] w-5 h-5" />
                                                            </Button>

                                                            <Modal show={modalFormOpen} onClose={closeModalForm} maxWidth="md" className="p-4">
                                                                <form onSubmit={(e) => onHandleSubmit(e, selectId)}>
                                                                    <h2 className="text-lg font-semibold text-gray-900">Please input a reject reason</h2>

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
    );
}

export default DashboardKesekreCompetition;
DashboardKesekreCompetition.layout = (page) => <DashboardLayout children={page} title="Competition Confirmation Payment" header="Competition Confirmation Payment" />;
