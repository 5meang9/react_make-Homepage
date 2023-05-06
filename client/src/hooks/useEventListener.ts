import {useEffect} from "react"

// target : 이벤트 부모
// type : 이벤트 타입 ex) mouseover, mouseout...
// callback : 이벤트 실행 시, 변경되는 것들
export const useEventListener = (
  target:  EventTarget | null,
  type: string,
  callback: EventListenerOrEventListenerObject | null
) => {

  console.log("확인~~~~~~~~~~~~~~~~")
  useEffect(() => {
    if (target && callback){
      target.addEventListener(type, callback)
      return () => target.removeEventListener(type, callback)
    }
  }, [target, type, callback])
}