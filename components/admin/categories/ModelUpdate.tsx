"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { useUpdateCategoryMutation } from "@/store/categories";
import { toast } from "sonner";

type Props = {
  categoryId: string;
  currentName: string;
};

const EditDialog = ({ categoryId, currentName }: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(currentName);
  const [updateCategory, { isLoading }] = useUpdateCategoryMutation();

  const handleSubmit = async () => {
    if (!value.trim()) return;

    try {
      await updateCategory({
        id: categoryId,
        newData: { name: value },
      }).unwrap();

      toast.success("Category updated!");
      setOpen(false);
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Pencil
          className="w-5 h-5 text-sky-500 cursor-pointer hover:text-blue-600"
          onClick={() => setOpen(true)}
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-slate-800">Edit Category</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Category name"
            className="text-foreground"
          />
          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            className="bg-blue-500 text-white hover:bg-blue-600"
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
