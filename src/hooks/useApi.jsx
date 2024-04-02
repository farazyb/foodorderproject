import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
export const useApiGet = (key, fn, options) =>
  useQuery({
    queryKey: key,
    queryFn: fn,
    ...options,
  });
export const useApiSend = (fn, options) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fn,
    onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['meals'] })
      },
    ...options,
  });
};
