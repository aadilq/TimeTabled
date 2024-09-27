import Event from "./Event";
const Calendar = () => {
    return(
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 AM</td>
                        <Event event = "Tartinery Café 🥞 " location = "Columbus Circle" color = "blue" />
                        <td></td>
                        <Event event = "Cafe Luluc 🥞" location = "Carroll Gardens" color = "blue"/>
                        <td></td>
                        <Event event = "Sarabeth's 🧇" location = "Upper West Side" color = "blue" />
                        <td></td>
                        <Event event = "Ess-a-Bagel🥯" location = "Upper West Side" color = "blue" />
                    </tr>
                    <tr>
                        <td className="time">9 AM</td>
                        <td></td>
                        <Event event = "Dudley's 🍳" location = "Lower East Side" color = "blue"/>
                        <td></td>
                        <Event event = "Cookshop 🍳" location = "Manhattan West Side" color = "blue"/>
                        <td></td>
                        <Event event = "Hole in the wall 🥞" location = "15 Cliff St" color = "blue"/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 AM</td>
                        <Event event = "Central Park 🌳" location = "Manhattan" color="green" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = "Belvedere Castle 🏰" location= "Central Park" color = "green" />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 AM</td>
                        <td></td>
                        <Event event = "Battery Park 🌳" location = "Southern Manhattan" color = "green"/>
                        <Event event =  "Botanical Gardens 🪴" location = "Brooklyn" color = "green"/>
                        <td></td>
                        <td></td>
                        <Event event = "NYSE 💰" location = "WallStreet" color = "pink"/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 PM</td>
                        <Event event = "The Smith 🥪" location = "Lincoln Square" color = "blue"/>
                        <td></td>
                        <td></td>
                       <Event event = "Vessel 🏛️" location = "Hudson Yards" color = "pink"/>
                        <td></td>
                        <td></td>
                        <Event event = "Rockfeller Center🏬" location = "45 Rockfeller Plaza" color = "pink" />
                    </tr>
                    <tr>
                        <td className="time">1 PM</td>
                        <td></td>
                        <Event event = "Fraunces Tavern 🍔" location = "Financial District" color = "blue"/>
                        <td></td>
                        <td></td>
                        <Event event = "Jacob's Pickles 🍗" location = "509 Amsterdam Ave" color = "blue"/>
                        <Event event = "Trinity Church ⛪" location = "89 Broadway" color = "pink"/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 PM</td>
                        <td></td>
                        <td></td>
                        <Event event = "Julianne's Pizza 🍕" location = "Dumbo" color = "blue"/>
                        <Event event = "Google 🏛️" location = "9th Avenue" color = "pink" /> 
                        <td></td>
                        <td></td>
                        <Event event = "Smith & Wollensky🥘" location = "Midtown East" color = "blue" />
                    </tr>
                    <tr>
                        <td className="time">3 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 PM</td>
                        <Event event = "Times Square 🌃" location = "Manhattan" color = "pink"/>
                        <td></td>
                        <td></td>
                        <Event event = "Chelsea Market 🥘" location = "Meatpacking District" color = "blue" />
                        <td></td>
                        <Event event = "Stone Street Tavern 🥪" location = "52 Stone St" color = "blue" />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 PM</td>
                        <td></td>
                        <Event event = "One World Observ. 🌅" location = "World Trade Center" color = "pink"/>
                        <Event event = "BKLYN Bridge Park 🌉" location = "Brooklyn Heights" color = "pink" />
                        <td></td>
                        <Event event = "Riverside Park⛲️" location = "Hudson River" color = "green"/>
                        <td></td>
                        <Event event = "BroadWay Show🎭" location = "Times Square" color = "pink" />
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Calendar; 