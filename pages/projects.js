import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbRealTimeChat from '../public/images/projects/thumbRealTimeChat.png'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="st1ckchat"
              title="st1ckChat - RealTimeChat"
              thumbnail={thumbRealTimeChat}
            >
              A simple real time chat using react, remix and supabase
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="Replicar este codigo para cada proyecto"
              title="Replicar este codigo para cada proyecto"
              thumbnail={thumbRealTimeChat}
            >
              Replicar este codigo para cada proyecto
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
