import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbBlog1 from '../public/images/contents/blog1.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
    </Container>
    <Section delay={0.1}>
      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
          title="My first blog"
          thumbnail={thumbBlog1}
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        ></GridItem>
        <GridItem
          title="My first blog"
          thumbnail={thumbBlog1}
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        ></GridItem>
        <GridItem
          title="My first blog"
          thumbnail={thumbBlog1}
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        ></GridItem>
      </SimpleGrid>
    </Section>
  </Layout>
)

export default Posts
