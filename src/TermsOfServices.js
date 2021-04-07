import React from 'react'
import NavBar from './NavBar.js'
import Container from 'react-bootstrap/Container'
const TermsOfServices = () => {
    return (
        <div>

            <Container fluid style={{padding:0, overflow:"hidden"}}>
               
               <NavBar hideOptions={true}></NavBar>
                <h1>Terms Of Services</h1>
                <ol>
                    <li style={{textAlign:"left", fontSize:30}}>
                        <h2>Terms</h2>
                        <p style={{fontSize:20}}>
                            By accessing the website at https://celestialcard.co, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
                        </p>
                    </li>
                    <li style={{textAlign:"left", fontSize:30}}>
                        <h2>Use License</h2>
                        <div style={{textAlign:"left", fontSize:20}}>
                        <p>a. Permission is granted to temporarily download one copy of the materials (information or software) on Mythia's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                        <p>1. modify or copy the materials;</p>
                        <p>2. use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</p>
                        <p>3. attempt to decompile or reverse engineer any software contained on Mythia's website;</p>
                        <p>4. remove any copyright or other proprietary notations from the materials; or</p>
                        <p>5. transfer the materials to another person or "mirror" the materials on any other server.</p>
                        <p>b. This license shall automatically terminate if you violate any of these restrictions and may be terminated by Mythia at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
                        </div>
                    </li>
                    <li style={{textAlign:"left", fontSize:30}}>
                        <h2>Disclaimer</h2>
                        <div style={{textAlign:"left", fontSize:20}}>
                        <p>a. The materials on Mythia's website are provided on an 'as is' basis. Mythia makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                        <p>b. Further, Mythia does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
                        </div>
                    </li>
                    <li style={{textAlign:"left", fontSize:30}}>
                        <h2>Limitations</h2>
                        <p style={{fontSize:20}}>
                        In no event shall Mythia or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Mythia's website, even if Mythia or a Mythia authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                        </p>
                    </li>
                    <li style={{textAlign:"left", fontSize:30}}>
                        <h2>Accuracy of materials</h2>
                        <p style={{fontSize:20}}>
                        The materials appearing on Mythia's website could include technical, typographical, or photographic errors. Mythia does not warrant that any of the materials on its website are accurate, complete or current. Mythia may make changes to the materials contained on its website at any time without notice. However Mythia does not make any commitment to update the materials.

                        </p>
                    </li>
                    <li style={{textAlign:"left", fontSize:30}}>
                        <h2>Links</h2>
                        <p style={{fontSize:20}}>
                        Mythia has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Mythia of the site. Use of any such linked website is at the user's own risk.

                        </p>
                    </li>
                    <li style={{textAlign:"left", fontSize:30}}>
                        <h2>Modifications</h2>
                        <p style={{fontSize:20}}>
                            Mythia may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                        </p>
                    </li>
                    <li style={{textAlign:"left", fontSize:30}}>
                        <h2>Governing Law</h2>
                        <p style={{fontSize:20}}>
                        These terms and conditions are governed by and construed in accordance with the laws of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>
                    </li>


                </ol>
               </Container>
        </div>
    )
}

export default TermsOfServices
