import useSWR from "swr";
import fetcher from "./fetcher";

export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const useUsersList = () => {
  const { data, error } = useSWR("/allUsers", fetcher);

  return {
    users: data || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export const useOrgsList = () => {
  const { data, error } = useSWR("/allOrganizations", fetcher);

  return {
    organizations: data || [],
    isLoading: !data && !error,
    isError: error,
  };
};
