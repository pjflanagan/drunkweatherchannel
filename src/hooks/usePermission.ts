import React, { useEffect, useState } from "react";

export const usePermission = (permission: PermissionName) => {
  const [state, setState] = useState('');

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