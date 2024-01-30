import React from "react";
import TeamAndVenue from "../../Add_on/IPLTeamAndVenue";
import TeamAndCaptain from "../../Add_on/IPLTeamAndCaptain";
import { teamPlayers } from "./IplContents";
import ramImage from '../../../img/iplteamcaptain.jpg';
const IPLTeamsCaptainVenue = () => {
    return (
        <React.Fragment >
            <article className="fs-5">
                <h3>
                    IPL 2024 , List of Teams and Captains and Match Venue.
                </h3>
                <p >
                    The Indian Premier League (IPL) is back in 2024; promising cricket fans are waiting to watch this T20 cricket. IPL has become more than just a sporting event; it’s a festival of cricket that transcends boundaries, bringing together talent from various nations and captivating audiences with its matches.
                    <br />
                    This comprehensive article provides a detailed breakdown of the IPL 2024 Schedule or Time Table, including match dates, competing teams, and fixtures. We aim to offer a clear and informative overview of the tournament, ensuring readers have all the essential information at their fingertips.
                </p>
                <br />
                <img src={ramImage} className="float-end rounded img-fluid" alt="Loading img.." style={{ width: '100%', height: 'auto' }}/>
                <br />
                <h3>
                    1. Locations for IPL 2024
                </h3>
    
                <br />
                
                <TeamAndVenue />
                <br />
                <h3>
                    2. Teams and their captains for IPL 2024
                </h3><br />
                
                <TeamAndCaptain />
                <br />
                <h3>
                    3. Teams and their Players
                </h3>
                <br />
                {teamPlayers.map((team, index) => {
                    const teamName = Object.keys(team)[0]; // Extracting the team name

                    const players = Object.values(team);// Extracting the players

                    return (
                        <article className="blog-post fs-5" key={index}>
                            <h5>{teamName}</h5>
                            <p>
                                {players.map((player, playerIndex) => (
                                    <p key={playerIndex}>{player}</p>
                                ))}
                            </p>
                        </article>
                    );
                })}
            </article>
        </React.Fragment>
    );
};

export default IPLTeamsCaptainVenue;
