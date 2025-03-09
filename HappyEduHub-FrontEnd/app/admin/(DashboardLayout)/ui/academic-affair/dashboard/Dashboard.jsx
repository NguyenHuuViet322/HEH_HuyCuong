'use client'
import Header from "@/app/admin/components/dashboard/Header";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Badge, Card } from "flowbite-react";
import { useEffect, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Dashboard = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [currentCourse, setCurrentCourse] = useState(null);
    const [upcomingCourse, setUpcomingCourse] = useState(null);
    const [completedCourse, setCompletedCourse] = useState(null);
    const [course, setCourse] = useState(null);

    const fetchData = async () => {

    }

    useEffect(() => {
        fetchData();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const ClassBadge = (
        <div className="relative bg-white pb-3 pt-0 mt-0 px-6 rounded-xl w-full my-4 shadow-xl border border-dashed border-primary transition-all duration-300 hover:-translate-y-2 hover:border-double">
            <div className="mt-2">
                <p className="text-xl font-semibold my-2 text-blue-500">Thông tin buổi học</p>
                <div className="flex flex-wrap gap-2 text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="flex flex-wrap gap-1">
                        {/* <Badge color="pink">{item.room}</Badge> */}
                        <Badge color="indigo">Cơ sở 1</Badge>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 text-gray-400 text-sm my-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="flex flex-wrap gap-1">
                        {/* <Badge color="purple">{shiftDay[item.day]}</Badge>
                            <Badge color="pink">Ca {item.shift}</Badge> */}
                    </div>
                </div>
                {/* Thêm môn gì ở đây */}
                <div className="border-t-2"></div>

                <div className="flex justify-between">
                    <div className="my-2">
                        <p className="font-semibold text-base mb-2 text-blue-500">Người dạy</p>
                        {/* {course.teacher.name} */}
                    </div>
                    <div className="my-2">
                        <p className="font-semibold text-base mb-2 text-blue-500 text-end">Trạng thái</p>
                        <div className="text-base text-gray-400 font-semibold">
                            <div className="space-x-2">
                                {/* Get real time and compare with shift */}
                                <Badge color="success">Đã dạy</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Card>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header title="Lớp học hiện tại" />
                </AccordionSummary>
                <AccordionDetails>
                    {ClassBadge}
                    {ClassBadge}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header title="Lớp học sắp tới" />
                </AccordionSummary>
                <AccordionDetails>
                    {ClassBadge}
                    {ClassBadge}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header title="Lớp học đã hoàn thành" />
                </AccordionSummary>
                <AccordionDetails>
                    {ClassBadge}
                    {ClassBadge}
                </AccordionDetails>
            </Accordion>
        </Card>
    )
}

export default Dashboard;
