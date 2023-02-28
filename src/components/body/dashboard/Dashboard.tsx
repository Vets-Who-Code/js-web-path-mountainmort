export function Dashboard() {
    return (
        <div id="dashboard">
            
            <section id="dash" className="dash">
                
                <div className="section-logo">
                    <h3>Dash</h3>
                    <span className="section-logo-icon material-symbols-outlined">
                        team_dashboard
                    </span>
                </div>

                <div className="section-content">
                    <p>This section will contain <i>important</i> metrics such as:</p>
                    <ul>
                        <li>Lines of code written per week</li>
                        <li>Number of commits per week</li>
                        <li>Miles ran per week</li>
                        <li>Feet climbed per week</li>
                    </ul>
                </div>

            </section>
            
            <section id="code" className="code">
                
                <div className="section-logo">
                    <h3>Code</h3>
                    <span className="section-logo-icon material-symbols-outlined">
                        code_blocks
                    </span>
                </div>

                <div className="section-content">
                    <p>This section will contain a <b>creative</b> calendar to show the days I wrote code:</p>

                    <table className="code-calendar">
                        <thead>
                            <tr>
                                <td colSpan={7}>January</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>T</td>
                                <td>W</td>
                                <td>Th</td>
                                <td>F</td>
                                <td>Sa</td>
                                <td>Su</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>x</td>
                                <td></td>
                                <td>x</td>
                                <td></td>
                                <td>x</td>
                                <td>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>x</td>
                                <td></td>
                                <td>x</td>
                                <td></td>
                                <td>x</td>
                                <td></td>
                                <td>x</td>
                            </tr>
                            <tr>
                                <td>x</td>
                                <td></td>
                                <td>x</td>
                                <td></td>
                                <td>x</td>
                                <td>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={7}>Total Days: 13</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </section>
            
            <section id="run" className="run">
                
                <div className="section-logo">
                    <h3>Run</h3>
                    <span className="section-logo-icon material-symbols-outlined">
                        sprint
                    </span>
                </div>

                <div className="section-content">
                    <p>This section will display running statistics such as:</p>
                    <ul>
                        <li>Fastest speed this week in <sup>miles</sup> / <sub>hour</sub></li>
                        <li>Longest run this week</li>
                        <li>Total time running</li>
                    </ul>
                </div>

            </section>

        </div>
            
    );
}
        
export default Dashboard;            