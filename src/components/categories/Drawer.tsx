import { Sheet, SheetContent, SheetFooter, SheetHeader } from "../ui/sheet";
import { BsFilterLeft } from "react-icons/bs";
import { ShadButton } from "../ui/button";
import FilterSide from "./FilterSide";
import { Dispatch, SetStateAction } from "react";

const Drawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="overflow-y-auto w-full">
        <SheetHeader className="!mb-4">
          <ShadButton
            variant="outline"
            className="rounded-[8px] border-[0.5px] border-[#757575] flex items-center gap-2 color-[#424242] w-min"
          >
            <span className="mr-2">
              <BsFilterLeft />
            </span>
            Filter
          </ShadButton>
        </SheetHeader>
        <FilterSide show={true} />
        <SheetFooter className="mt-4 mb-[25px] !flex !justify-center !items-center mx-auto w-full">
          <ShadButton
            type="submit"
            className="!py-[9px] !px-[30px] !rounded-[8px] bg-[#1A4DE1] hover:bg-[#1A4DE1] text-white"
            onClick={() => setOpen(false)}
          >
            View 87 products
          </ShadButton>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
