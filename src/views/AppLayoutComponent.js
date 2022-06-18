import './AppLayoutComponent.css';
import Box from '../components/Box';
import Grid from '../components/Grid';
import Notification from '../components/notification/Notification';

function AppLayoutComponent() {
    return (
        <section className='app-section'>
            <div className="app-container">
                <h2>Farm Dashboard</h2>
                <Notification title="Hi" description="We are here for peace."/>
                <Grid columns={3}>
                    <Box title="Order per day">
                        <ul>
                            <li>3 กันยายน - 1,582 ออเดอร์</li>
                            <li>2 กันยายน - 1,649 ออเดอร์</li>
                            <li>1 กันยายน - 1,755 ออเดอร์</li>
                        </ul>
                    </Box>
                    <Box title="ยอดขายสินค้ายอดนิยม">
                        <p>หมายเหตุ : เป็นราคาโดยประมาณเท่านั้น</p>
                        <ol>
                            <li>แครอท ~ 200,000 บาท</li>
                            <li>มะเขือเทศ ~ 120,000 บาท</li>
                            <li>แตงกวา ~ 105,000 บาท</li>
                        </ol>
                    </Box>
                    <Box title="Quote of the day">
                        <p>Be the best of yourself.</p>
                        <p>by me</p>
                    </Box>
                </Grid>
            </div>
        </section>
    )
}

export default AppLayoutComponent;