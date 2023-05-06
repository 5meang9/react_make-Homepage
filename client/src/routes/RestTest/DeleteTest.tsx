import { useState, useCallback } from "react"
import {del} from '../../server'

export default function DeleteTest(){

  const [data, setData] = useState<object>({})
  const [errorMessage, serErrorMessage] = useState<string | null>(null)

  const deleteTest = useCallback(() => {
    del('/test/1234')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => serErrorMessage(error.message))
  }, [])

  return(
    <div className="mb-4">
      <div className="felx justify-center mb-4">
        <button onClick={deleteTest} className="btn btn-primary">
          DELETE id 1234
        </button>
      </div>
      <div className="mt-4 text-center">
        <p>data: {JSON.stringify(data, null, 2)}</p>
        {errorMessage && <p>error: {errorMessage}</p>}
      </div>
    </div>
  )

}