import { NEUTRAL_COLOR } from "@/constant/colors"
import { Typography } from "@mui/material"

interface ProfileHeadingProps {
    title: string
}

const ProfileHeading: React.FC<ProfileHeadingProps> = ({ title }) => {
    return (
        <div className="bg-neutral180 w-full rounded py-[13px] px-[31px] mb-[50px]">
            <Typography variant="h6" color={NEUTRAL_COLOR.neutral600} fontSize={16} fontWeight={600}>
                {title}
            </Typography>
        </div>
    )
}

export default ProfileHeading