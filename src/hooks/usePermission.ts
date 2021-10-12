import { useEffect, useState } from "react";

export const usePermission = (permission: PermissionName): string => {
  const [state, setState] = useState<string>('');

  const handlePermission = () => {
    // this does not prompt the user for the location permission
    // just gets a result for if one is available
    navigator.permissions?.query({ name: permission }).then(result => {
      setState(result.state);
      result.onchange = () => {
        setState(result.state);
      };
    })
  }

  useEffect(() => {
    if (navigator.permissions) {
      handlePermission();
    } else {
      setState('unavailable');
    }
  }, []);

  return state;
}