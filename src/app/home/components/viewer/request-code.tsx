import { Button } from "@/components/ui/button"
import { getSourceCode } from "../../action"

export default function RequestCode({ title, setCode }:
  {
    title: string,
    setCode: (code: string) => void,
  }) {

  async function handleShowCode() {
    const res = await getSourceCode(title)
    const lines = res?.toString().split('\n')
    if (res) {
      setCode(res.toString())
    }
  }


  return <div className="flex space-x-2">
    <Button className="m-2" size={"sm"} onClick={handleShowCode}>Show code</Button>
    <Button className="m-2" size={"sm"} onClick={() => setCode('')}>Hide code</Button>
  </div>

}