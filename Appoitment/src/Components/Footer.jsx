import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="glassdiv2">
            <div className="logo">
                <span>Medi</span><span style={{color: '#C42121'}}>Go</span>
            </div>
            <div className="slogan" style={{fontSize: '35px', color: '#aaaaaa'}}>
                Your Health our Goal
            </div>
            <hr color='#aaaaaa' style={{marginTop: '30px',marginBottom: '30px',height: '1px',border: 'none'}}/>
            <div style={{width: '60%',display: 'flex', justifyContent: 'spaceBetween',color: '#767676',fontSize: '20px',fontWeight: '500'}}>
                <div>All Right Reserved 2024</div>
                <div>Terms and Contditions</div>
                <div>Privacy Policy</div>
            </div>
        </div>
    </footer>
  )
}
