import React, { useState } from "react";

export default function Changelog() {
    const [showEasterEgg, setShowEasterEgg] = useState(false)

    return (
        <React.Fragment>
            <div id="change-log-container">
                <table className="table change-log-table">
                    <tbody>
                        <tr>
                            <td>09/06/2017</td>
                            <td>
                                <ul className="no-bullet">
                                    <li>Complete design overhaul and a <strong>lot</strong> of back-end code improvements (a.k.a. a complete refactoring).</li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td>24/09/2016</td>
                            <td>
                                <ul className="no-bullet">
                                    <li><p>Added <a href="type2420.php">Grundig Type 2420</a>, <a href="about.php">contact information</a></p></li>
                                    <li><p>Vastly improved website responsiveness</p></li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td>31/10/2015</td>
                            <td>
                                <ul className="no-bullet">
                                    <li><a href="music">Added new music section</a></li>
                                </ul>
                            </td>
                        </tr>

                        <tr className="odd">
                            <td>21/11/2014</td>
                            <td>
                                <ul className="no-bullet">
                                    <li><p>Released new version for the Serial Port Interpreter</p></li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td>13/12/2013</td>
                            <td>
                                <ul className="no-bullet">
                                    <li><p>Visual style reboot</p></li>
                                </ul>
                            </td>
                        </tr>

                        <tr className="odd">
                            <td>14/10/2013</td>
                            <td>
                                <ul className="no-bullet">
                                    <li><p>New host and subdomain @ pcriot.</p></li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td>18/09/2013</td>
                            <td>
                                <ul className="no-bullet">
                                    <li><p>New projects added.</p></li>
                                </ul>
                            </td>
                        </tr>

                        <tr className="odd">
                            <td>12/09/2012</td>
                            <td>
                                <ul className="no-bullet">
                                    <li><p>New Project: <a href="asteroids.html">Asteroids</a></p></li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td>12/09/2012</td>
                            <td>
                                <ul className="no-bullet">
                                    <li><p>Visual style reboot.</p></li>
                                </ul>
                            </td>
                        </tr>

                        <tr className="odd">
                            <td>10/09/2012</td>
                            <td>
                                <ul className="no-bullet">
                                    <li><p>Hosting website on <a href="https://www.dropbox.com">Dropbox</a></p></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button type="button" className="btn btn-default btn-xs" id="easter-egg-btn" onClick={() => setShowEasterEgg(!showEasterEgg)}>Easter Egg?</button>
            </div>

            { showEasterEgg && <EasterEgg></EasterEgg> }
        </React.Fragment>
    )
}

function EasterEgg() {
    return (
        <div id="easter-egg-container">
		<div className="sjis">{`
　　　　　　 　　／￣￣￣フ＼　　 　　　　　　　　　　　　＿　　　　　　　ﾉ＾)
　　　　　　　／／￣フ ／　　 ＼　　　　　　　　　　　 .／／＼　 　　　./　/
　　　　　 ／／　 ∠／　 ＿＿＿＼＿＿＿　 ＿＿／／　　　＼　　 /　（＿＿＿
　　　　／／￣￣￣フ ／＿　.／／＿　 ／／＿　 ／　　　　　　＼./　(＿（＿＿）
　　 ／／￣フ ／￣／／／／／／／／／／／／　　　　　　　　　|　 (＿（＿＿）
　／∠＿／.／　.／∠／／／∠／／／∠／／　　　　　　∧ ∧ /)　(＿（＿＿）
∠＿__,,,__／　.∠＿＿／∠＿＿／∠＿＿／　　　　　　　(´ー｀ （ （　(＿（＿__）
＼　　　　＼　＼／￣￣￣フ＼ ＼ ＼＿　＼　 ＿　　　/⌒　｀´　 人＿＿＿ソ
　 ＼　　　　＼　＼フ ／￣＼　＼ .／／＼　 ／／＼ / 人　l　 彡ﾉ　　　　　＼
　　　＼　＿ 　＼／／＿＿＿＼／∠＿ 　／／　　　<　Y ヽ　ヽ　(.　　　　　　 ＼
　　　　／／＼／／／＿　 ／／＿　 ／／／　　　　 人├'"　　　 ヽ￣￣￣￣￣
　　 ／／　 ／／.／／／／／／／／∠／　　　　　 ヽ-i ヽ＿＿　　ヽ
　／∠＿／／.／∠／／／∠／／　.＼＼　　　　　　　\`ﾘﾉ ヽ　|＼　　ヽ
∠＿__＿／.∠＿＿／∠＿＿／∠フ＼.＼＼　　　　　 ｃ;_,;....ﾉ　ヾﾉヽ__ﾉ
        `}</div>
		<div className="sjis">{`
 　　　　　　　　　______　　　　　 　／´:::::ヽ､_
　　　　　　　　「:::::::::::｀ヽ､　 __／::::____:::::::::::｀7
　　　　　　　　＞,.'-‐'''""￣　　￣｀"''‐､:::::::/
　　　　　　　く／　　　　　　　　　　　　　ヽく､
　　　　　　　 /　　　 /　　i　 ﾊ　､　　ヽ,　　', ＼
　　　　　　 / 　　/　ハ　ハ/ イ　ヽ､　　',.　 i／
　　　　　　　i　　ﾊ/ｰ　ﾚ'　 　--‐'´　ヽ　 ﾊ　',
　　　　　　 ﾉ| 　 ﾊ －'´　　　 　　"" /レ'ノ　ﾊ
　, '⌒ヽ　　 レ'　7,,,,　 　 　　　,　　　i　　|　/　ヽ,
　l　　　ー--─ 人　 　 ー'´￣　　　ﾊ　 / i　 i　 |
　ヽ､_ ノ　　 ﾉ|　　/ヽ､._　　　　　,.イ ﾊﾞ　 ハ,へﾉﾍ
　　　　　　　　ﾚﾍ./^レﾍ"'T'v--/レ^ｶｨ‐'ヽ!／ 　 /i
　　　　　　　　　　　　, 'r'"ヽr,／￣ヽ;::i　　ヽ､ ／ /
　　　　　　　　　　　/　 〉　-L〉-　　く:/　　　ﾊ-＜
　　　　　　　　　 　 i 　 >-イ-｀r---〈::ﾄ､r'"´｀＼___＼
　　　　　　　　　　　/'ヽi::::::::￣::::::::::::::::7'ヽ_　　　〉､-┘
　　　　　　　　　 　〈　 ､i:::::::::i::::::::::::::::く ／　　∠二>
　　　　　　　　　　　.＼/:::::::;::::::::;:::::::::::/　　r'､___
　　　　　　　　　　　 (/::::::/:::::i::::::::::::::::ゝ､____ﾉ､／
        `}</div>
	</div>
    )
}