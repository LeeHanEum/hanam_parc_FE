import React from 'react'
import Navbar from "../../components/Navbar";
import join_soccer from "../../asset/image/join_soccer.jpg";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import {event} from "../../asset/data/event";
import SubFooter from "../../components/SubFooter";

export default function EventSchdule() {

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-16 lg:py-40 bg-no-repeat bg-center bg-cover"
                     style={{backgroundImage: `url(${join_soccer})`,}}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-5xl text-4xl md:leading-normal tracking-wide leading-normal font-medium text-white pt-8">행사일정</h3>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">

                <div className="container relative">
                    <FullCalendar
                        defaultView="dayGridMonth"
                        plugins={[dayGridPlugin]}
                        events={event}
                        headerToolbar = {
                            {
                                left:'prev,next today',
                                center:'title',
                                right :'addEventButton'
                            }
                        }
                        customButtons={
                            {
                                addEventButton : {
                                    text:'일정 추가',
                                    click : function (){
                                        var dateStr = prompt('Enter a date in YYYY-MM-DD format');
                                    }
                                },
                                today : {
                                    text:'오늘'
                                }
                            }
                        }
                    />
                </div>


            </section>
            <SubFooter />
        </>
    )
}