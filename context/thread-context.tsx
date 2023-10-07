import { useEffect, useState, PropsWithChildren, createContext } from "react";
import { Thread } from "../types/threads";
import { generateThreads } from "../utils/generate-dommy-data";

export const ThreadContext = createContext<Thread[]>([]);

export const ThreadProvdier = ({
	children,
}: PropsWithChildren): JSX.Element => {
	const [threads, setThreads] = useState<Thread[]>([]);

	useEffect(() => {
		setThreads(generateThreads());
	}, []);

	return (
		<ThreadContext.Provider value={threads}>{children}</ThreadContext.Provider>
	);
};
