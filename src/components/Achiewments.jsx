import {
    Box,
    Grid,
    Typography,
} from '@mui/material';

import { styled } from '@mui/system';
import background from '../assets/achiewments_bg.svg';

const StyledTextContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
`;

const StyledGrid = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    max-width: 1200px;
`;

const GridContainer = styled('div')`
    display: grid;
    grid-template-columns: ${props => props.dataLength > 3 ? "1fr 1fr" : "1fr"};
    gap: 16px;
`;

const GridItem = styled(Grid)`
    background: #fff;
    max-width: fit-content;
    margin: 0 auto;
`;

const Achiewments = ({ isEnglish, data }) => {
    const apiUrl = process.env.API_URL;

    if (!data) {
        return null;
    }

    const pageTitle = isEnglish ? 'Our achiewments' : 'Наші досягнення';

    return (
        <Box style={{
            padding: '150px 10%',
            margin: 0,
            backgroundImage: `url(${background.src})`,
            backgroundRepeat: 'no-repeat no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
        }}>
            <StyledTextContainer>
                <Typography id='services' variant="h4_light" gutterBottom>
                    {pageTitle}
                </Typography>
            </StyledTextContainer>

            <GridContainer dataLength={data.length}>
                {data.map((item, index) => (
                    <GridItem
                        item
                        key={item.id}
                    >
                        <StyledGrid>
                            <div style={{
                                display: 'flex',
                                flexDirection: "column",
                                justifyContent: 'space-between',
                                maxHeight: '70%'
                            }}>
                                <Typography variant="h4">
                                    {isEnglish ? item.attributes.EnglishText : item.attributes.text}
                                </Typography>
                                <Typography variant="h4" gutterBottom>
                                    {isEnglish ? item.attributes.EnglishTitle : item.attributes.title}
                                </Typography>
                            </div>
                        </StyledGrid>
                    </GridItem>
                ))}
            </GridContainer>
        </Box >
    );
};

export default Achiewments;