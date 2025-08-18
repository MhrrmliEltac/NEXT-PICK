import { NEUTRAL_COLOR } from "@/constant/colors"
import { FormGroup, FormControl, FormLabel, Typography } from "@mui/material"
import ProfileHeading from "../general/ProfileHeading"
import { ShadButton } from "../ui/button"
import { Input } from "../ui/input"
import { useAppSelector } from "@/hook/hooks"
import { RootState } from "@/redux-toolkit/store"
import { Calendar, House, Mail, PhoneCall, Signpost, User } from "lucide-react"

const MyProfile = () => {

    const { user } = useAppSelector((state: RootState) => state.user)

    return (
        <div className="w-full max-w-[808px] mx-auto">
            <ProfileHeading title="Personal data" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
                <FormGroup>
                    <FormControl>
                        <FormLabel htmlFor="name" className="!text-neutral800 !text-sm !font-medium">Name</FormLabel>
                        <FormGroup className="relative flex ">
                            <User className="absolute top-2.5 left-2 text-neutral-400" size={25} />
                            <Input readOnly value={user && user?.name} placeholder="Name" id="name" name="name" className="w-full h-[48px] border-neutral-400 border-2 pl-10" />
                        </FormGroup>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl>
                        <FormLabel htmlFor="email" className="!text-neutral800 !text-sm !font-medium">E-mail address</FormLabel>
                        <FormGroup className="relative flex">
                            <Mail className="absolute top-3 left-2 text-neutral-400" size={25} />
                            <Input readOnly value={user && user?.email} placeholder="Email" id="email" name="email" className="w-full h-[48px] border-neutral-400 border-2 pl-10" />
                        </FormGroup>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl>
                        <FormLabel htmlFor="phone" className="!text-neutral800 !text-sm !font-medium">Phone number</FormLabel>
                        <FormGroup className="relative flex">
                            <PhoneCall className="absolute top-3 left-2 text-neutral-400" size={25} />
                            <Input readOnly value={user && user?.phone} placeholder="Phone number" id="phone" name="phone" className="w-full h-[48px] border-neutral-400 border-2 pl-10" />
                        </FormGroup>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl>
                        <FormLabel htmlFor="birthDate" className="!text-neutral800 !text-sm !font-medium">Birth date</FormLabel>
                        <FormGroup className="relative flex">
                            <Calendar className="absolute top-3 left-2 text-neutral-400" size={25} />
                            <Input readOnly type="date" value={user && new Date(user?.birthDate).toISOString().split('T')[0]} placeholder="Birth date" id="birthDate" name="birthDate" className="w-full h-[48px] border-neutral-400 border-2 pl-10" />
                        </FormGroup>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl>
                        <FormLabel htmlFor="address" className="!text-neutral800 !text-sm !font-medium">Address</FormLabel>
                        <FormGroup className="relative flex">
                            <House className="absolute top-3 left-2 text-neutral-400" size={25} />
                            <Input value={user && user?.address} placeholder="Address" id="address" name="address" className="w-full h-[48px] border-neutral-400 border-2 pl-10" />
                        </FormGroup>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl>
                        <FormLabel htmlFor="postalCode" className="!text-neutral800 !text-sm !font-medium">Postal code</FormLabel>
                        <FormGroup className="relative flex">
                            <Signpost className="absolute top-3 left-2 text-neutral-400" size={25} />
                            <Input value={user && user?.postalCode} placeholder="Postal code" id="postalCode" name="postalCode" className="w-full h-[48px] border-neutral-400 border-2 pl-10" />
                        </FormGroup>
                    </FormControl>
                </FormGroup>
            </div>

            <div className="flex flex-col justify-center items-center rounded gap-4 mb-[72px] min-h-[295px] w-full bg-center" style={{ backgroundImage: "url(/fone-de-ouvido-de-realidade-virtual-de-vista-superior-branco_23-2148912739.avif)", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <Typography variant="h3" fontSize={{
                    xs: 20,
                    md: 32
                }} fontWeight={600} color={NEUTRAL_COLOR.neutral800} className="text-center">NEXTPICK Costumer Club</Typography>
                <Typography variant="button" sx={{ textTransform: "none" }} fontSize={{
                    xs: 14,
                    md: 16
                }} color={NEUTRAL_COLOR.neutral600} className="text-center text-wrap max-w-[400px]">Membership in Nextpick’s Costumer Club entitles  you to discounts on selected member products, as  well as exciting offers from our partners.</Typography>
                <ShadButton variant="outline" className="bg-primary text-white w-fit">See offers</ShadButton>
            </div>
        </div>)
}

export default MyProfile