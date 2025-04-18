import { IconPreviewImageProfile } from "@/Components/IconAdmin";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { flashMessage } from "@/lib/utils";
import { CheckBadgeIcon, ClockIcon, PaperAirplaneIcon, ArchiveBoxXMarkIcon, DocumentCheckIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { Link, useForm, usePage } from "@inertiajs/react";
import { use, useEffect, useRef, useState } from "react";
import { PiArrowLeft, PiArrowRight, PiArrowsDownUp } from "react-icons/pi";
import { toast } from "sonner";

function DashboardKesekreSemnas({ ...props }) {
    // const event_registrations_semnas = usePage().props.event_registrations_semnas;
    const count_verified = usePage().props.count_verified;
    const count_pending = usePage().props.count_pending;
    const count_rejected = usePage().props.count_rejected;
    const count_requested = usePage().props.count_requested;
    const { flash_message } = usePage().props;
    const { data: event_registrations_semnas, meta, links } = props.event_registrations_semnas;

    const { data, setData, post, put, patch, errors, processing, recentlySuccessful, formData, clearErrors, reset } = useForm({
        reject_reason: event_registrations_semnas.reject_reason ?? '',
        _method: 'POST',
    });

    const [modalIdentifyUserOpen, setModalIdentifyUserOpen] = useState(false);
    const [modalFormOpen, setModalFormOpen] = useState(false);
    const hasShownToast = useRef(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectId, setSelectId] = useState(null);

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

    // useEffect(() => {
    //     if (recentlySuccessful) {
    //         closeModalForm();
    //         hasShownToast.current = false;
    //     }
    // }, [recentlySuccessful]);
    const onHandleSubmit = (e, semnasId) => {

        e.preventDefault();

        if (!data.reject_reason) {
            if (!hasShownToast.current) {
                toast.error("Please enter reject reason.");
                hasShownToast.current = true;
            }
            return;
        }


        post(route('dashboard.semnas.admin-kesekre.reject', { id: semnasId }), {
            onSuccess: () => {
                closeModalForm();
                hasShownToast.current = false;
            },
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <>
            <div className="py-5">
                <div className="bg-white p-4 shadow rounded-lg sm:p-8 flex flex-col gap-5 justify-between">
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
                    <Card>
                        <CardContent>
                            <div className="my-8 flow-root">
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
                                                        // onClick={() => onSortable('title')}
                                                        >
                                                            No
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
                                                        // onClick={() => onSortable('title')}
                                                        >
                                                            Name
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
                                                        // onClick={() => onSortable('status')}
                                                        >
                                                            Type
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
                                                        // onClick={() => onSortable('created_at')}
                                                        >
                                                            Proof Payment
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
                                                            onClick={() => onSortable('created_at')}
                                                        >
                                                            Identity
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
                                                        // onClick={() => onSortable('created_at')}
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
                                                        // onClick={() => onSortable('created_at')}
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
                                                        // onClick={() => onSortable('created_at')}
                                                        >
                                                            Action
                                                        </Button>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {event_registrations_semnas.map((semnas, index) => (
                                                    <tr key={index}>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-medium text-foreground">
                                                            {index + 1}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-medium text-foreground">
                                                            {semnas.user.name}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-medium text-foreground">
                                                            {semnas.events.kode === 'SMNTIOF' ? (
                                                                'Offline'
                                                            ) : (
                                                                'Online'
                                                            )}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-medium text-foreground">
                                                            <Dialog>
                                                                <DialogTrigger className='flex flex-row gap-3 justify-center items-center text-foreground font-normal'>
                                                                    Open
                                                                    <IconPreviewImageProfile />
                                                                </DialogTrigger>
                                                                <DialogContent>
                                                                    <DialogTitle>
                                                                        Proof Payment
                                                                    </DialogTitle>
                                                                    <img src={semnas.payment_proof_path ? `${semnas.payment_proof_path}` : 'assets/images/default_image_profile.png'} className="h-64 w-auto" alt="" />
                                                                    <a href={semnas.payment_proof_path ? `${semnas.payment_proof_path}` : 'assets/images/default_image_profile.png'} className="text-center" target="_blank" rel="noopener noreferrer">Open in new tab</a>
                                                                </DialogContent>
                                                            </Dialog>
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-medium text-foreground">
                                                            <Button
                                                                variant='none'
                                                                className="flex flex-row gap-3 justify-center items-center text-foreground font-normal"
                                                                onClick={() => modalIdentifyUserHandler(semnas.user)}
                                                            >
                                                                Open
                                                                <IconPreviewImageProfile />
                                                            </Button>
                                                            <Modal show={modalIdentifyUserOpen} onClose={closeModal} className="px-5 py-5">
                                                                <h2 className="text-lg font-medium text-gray-900">Identity User</h2>
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
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-medium text-foreground">
                                                            <Badge
                                                                className={`
                                                                ${semnas.payment_status === 'Pending' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}
                                                                ${semnas.payment_status === 'Verified' ? 'bg-green-500 hover:bg-green-600' : ''}
                                                                ${semnas.payment_status === 'Rejected' ? 'bg-red-500 hover:bg-red-600' : ''}
                                                                ${semnas.payment_status === 'Requested' ? 'bg-indigo-500 hover:bg-indigo-600' : ''}
                                                                py-2 px-2
                                                                `}
                                                            >
                                                                {semnas.payment_status}
                                                            </Badge>
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 text-sm font-medium text-foreground">
                                                            Rp.{" "}{semnas.total_payment}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-8 flex md:flex-row gap-2">
                                                            <Link
                                                                className="flex justify-center items-center border-2 rounded-md border-[#4DE45C] p-1.5 hover:bg-[#4DE45C]/20 transition-all duration-300 ease-in-out"
                                                                href={route('dashboard.semnas.admin-kesekre.payment', { id: semnas.id })}
                                                                method="post">
                                                                <DocumentCheckIcon className="text-[#4DE45C] w-5 h-5" />
                                                            </Link>
                                                            <Button
                                                                variant="none"
                                                                className="flex justify-center items-center border-2 rounded-md border-[#E82323] p-1.5 hover:bg-[#E82323]/20 transition-all duration-300 ease-in-out"
                                                                onClick={() => modalFormOpenHandler(semnas.id)}>
                                                                <XCircleIcon className="text-[#E82323] w-5 h-5" />
                                                            </Button>

                                                            <Modal show={modalFormOpen} onClose={closeModalForm} maxWidth="md" className="p-4">
                                                                <form onSubmit={(e) => onHandleSubmit(e, selectId)}>
                                                                    <h2 className="text-lg font-medium text-gray-900">Please input a reject reason</h2>

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
                                Showing <span className="font-medium text-[#4880FF]">{meta.from}</span> of {meta.total}
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

export default DashboardKesekreSemnas;

DashboardKesekreSemnas.layout = (page) => <DashboardLayout children={page} title="Seminar Confirmation Payment" header="Seminar Confirmation Payment" />;
