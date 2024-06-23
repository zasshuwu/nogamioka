import { Button } from "@/components/ui/button"
import { getSourceCode } from "../../action"

export default function RequestCode({ title, setCode, isLoadingCode, setIsLoadingCode }:
  {
    title: string,
    setCode: (code: string) => void,
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


  return <div className="flex space-x-2">
    <Button disabled={isLoadingCode} className="m-2" size={"sm"} onClick={handleShowCode}>Show code</Button>
    <Button disabled={isLoadingCode} className="m-2" size={"sm"} onClick={() => setCode('')}>Hide code</Button>
  </div>

}