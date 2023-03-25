import NextLink from 'next/link'

import {
  List,
  SimpleGrid,
  GridItem,
  ListItem,
  Link,
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'

import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'

import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Colombia!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Juan José Blanco
            </Heading>
            <p>Systems & Computer Science Engineer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/juanjbdev.jpeg"
              alt="Profile Picture"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I have been passionate about new learning, challenges and
            creativity, this is how I discovered my passion for development and
            programming. Thanks to this, I have been able to work as a developer
            in an academic, personal and professional level.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            Born in Moniquirá, Colombia.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Finished the Systems and Computer Science degree at Universidad
            Pedagógica y Tecnológica de Colombia, Tunja.
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Studies a postgraduate specialization in databases
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Works at{' '}
            <Link
              as={NextLink}
              href="https://www.softtek.com/es-es/"
              target={'_blank'}
            >
              Softtek
            </Link>
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/juanjdev" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @juanjdev
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/juanjbdev" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @juanjbdev
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/juanj-blanco/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  Juan José Blanco Mendoza
                </Button>
              </Link>
            </ListItem>
          </List>

          <Heading as="h3" variant="section-title">
            Contact Me
          </Heading>

          <p>
            Join me and feel free to contact me on any of my sites on the web,
            or also by my email, you have a button just below, I know we can do
            amazing things together!
          </p>

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="mailto:juanjb.dev@gmail.com"
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
            >
              Email me here!
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
