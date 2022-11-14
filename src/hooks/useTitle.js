import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -Photography Service`;
    }, [title])
};

export default useTitle;