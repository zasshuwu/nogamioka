import { Button } from "@/components/ui/button"
import { getSourceCode } from "../../action"
import { FaCode, FaEye, FaEyeSlash } from "react-icons/fa"

export default function RequestCode({ title, setCode, code, isLoadingCode, setIsLoadingCode }:
  {
    title: string,
    setCode: (code: string) => void,
    code: string,
    setIsLoadingCode: (state: boolean) => void,
    isLoadingCode: boolean
  }) {

  async function handleShowCode() {
    setIsLoadingCode(true)
    const res = await getSourceCode(title)
    if (res) {
      setCode(res.toString())
    }
    setIsLoadingCode(false)
  }


  return <div className="flex">
    {
      code.length > 0
        ? <Button disabled={isLoadingCode} className="m-2 h-6 w-fit hover:bg-green-500" variant={"secondary"} onClick={() => setCode('')}><FaEyeSlash></FaEyeSlash>&nbsp;<span className="">Code</span></Button>
        : <Button disabled={isLoadingCode} className="m-2 h-6 w-fit hover:bg-green-500" variant={"secondary"} onClick={handleShowCode}><FaEye></FaEye>&nbsp;<span className="">Code</span></Button>
    }
  </div>

}