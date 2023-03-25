import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
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
