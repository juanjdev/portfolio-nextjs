import { Container, Badge } from '@chakra-ui/react'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return(
        <Layout title="st1ckchat">
            <Container>
                <Title>
                    st1ckchat <Badge>2016</Badge>
                </Title>
                <P>
                    A simple real time chat using react, remix and supabase 
                </P>
            </Container>
            </Layout>
    )
}

export default Work
