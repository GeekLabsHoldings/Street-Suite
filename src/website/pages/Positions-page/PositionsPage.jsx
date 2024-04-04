import AccordionGroup from '@mui/joy/AccordionGroup';
import './PositionsPage.css';
import PositionCard from '../../components/PositionCard/PositionCard';
import { Helmet } from 'react-helmet-async';

const PositionsPage = () => {
    return (
        <>
            <Helmet>
                <title>Vacancies | Street Suite</title>
                <meta
                    name="description"
                    content="Explore Vacancies on Street Suite."
                />
            </Helmet>


            <div className='py-5 flex flex-col gap-16 bgImg'>
                <div className="md:w-1/2 headOfPage mx-auto flex flex-col align-items-center gap-3">
                    <h1><span className='highlight'>Street Suite</span> Vacancies </h1>
                    <div className='md:w-7/12 sm:w-3/4 text-center'>
                        <p>Street Suite is expanding and we are looking for talented people to join our team!</p>
                    </div>
                </div>

                <AccordionGroup disableDivider className=" w-10/12 mx-auto flex flex-col gap-6">

                    <PositionCard positionTitle='Back End Developer' positionIdx={0} />
                    <PositionCard positionTitle='Back End Developer' positionIdx={1} />
                    <PositionCard positionTitle='Front End Developer' positionIdx={2} />
                    <PositionCard positionTitle='Marketing Specialist' positionIdx={3} />


                </AccordionGroup>
            </div>
        </>
    )

}

export default PositionsPage