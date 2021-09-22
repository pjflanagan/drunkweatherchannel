import { useEffect, useState } from "react";

export const usePermission = (permission: PermissionName): string => {
  const [state, setState] = useState<string>('');

  const handlePermission = () => {
    navigator.permissions.query({ name: permission }).then(result => {
      setState(result.state);
      result.onchange = () => {
        setState(result.state);
      };
    })
  }

  useEffect(() => {
    handlePermission();
  }, []);

  return state;
}