import { useState, useEffect, useCallback } from "react";
import {get} from '../../server'
import './Board.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';

export default function Board(){
  // const [data, setData] = useState<object>({})
  const [data, setData] = useState<string[]>([])
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() =>{
    get('/test')
      .then(res => res.json())
      .then(data => setData(data.body))
      .catch(error => setErrorMessage(error.message))
  }, [])


  return (
    <>
      {data.map((row: any) => (
        <a href="/bespoke_desc">
          <div className='profile-main-layout'>
            <div className="profile-main-contents-wrap">
              <Badge pill bg="primary">
                {row.badge_title} 
              </Badge>{' '}
              <div className="profile-contents-title">
                {row.title}
              </div>
              <div>
                {row.contents}
              </div>
              <div className="profile-contents-footer">
                {row.creater_id}
                <span className="profile-contents-footer-date">{row.created_at}</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </>
  )
}