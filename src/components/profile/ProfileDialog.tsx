import { signOut } from "@/auth/signOut"
import { Button, CircularProgress, Dialog, DialogActions, DialogTitle } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

type DialogType = {
    open: boolean
    onClose: () => void
}

const ProfileDialog: React.FC<DialogType> = ({ open, onClose }) => {

    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleSignOut = async () => {
        setLoading(true)
        const response = await signOut("/auth/sign-out")
        setLoading(false)
        if (response.success) {
            navigate("/")
        }
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Çıxmaq istədiyindən əminsən?</DialogTitle>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Ləğv et
                </Button>
                <Button onClick={handleSignOut} color="error" sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    {loading && <CircularProgress size={15} color="error" sx={{ m: 0, p: 0 }} />}
                    Bəli, çıx
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ProfileDialog
