interface AlertContextType {
  alerts: {
    id: string;
    title: string;
    description: string;
    variant?: "default" | "destructive";
    duration?: number;
  } | null;
  setAlert: React.Dispatch<React.SetStateAction<AlertContextType["alerts"]>>;
}
