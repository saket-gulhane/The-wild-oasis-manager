import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCabin as createEditCabinApi } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClinet = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabinApi,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClinet.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
