import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid, Link, VStack, Card, CardBody, CardFooter } from '@chakra-ui/react';

function Projects() {
  const projectList = [
    { title: "React Space", description: "Create amazing AR components", img: "/images/card1.png" },
    { title: "React Infinite Scroll", description: "A scrollable bottom sheet", img: "/images/card2.png" },
    { title: "Photo Gallery", description: "A one-stop-shop for photographers", img: "/images/card3.png" },
    { title: "Event Planner", description: "A platform for leisure seekers", img: "/images/card4.png" }
  ];

  return (
    <Box as="section" id="projects-section" py={10} px={5} backgroundColor="gray.50">
      <Heading as="h2" size="xl" mb={8} textAlign="center" color="gray.800">
        Featured Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {projectList.map((project, index) => (
          <Card
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            bg="white"
            _hover={{ transform: 'scale(1.05)', transition: '0.3s ease-in-out' }}
          >
            <Image src={project.img} alt={project.title} boxSize="100%" objectFit="cover" />
            <CardBody>
              <VStack align="start" spacing={3}>
                <Heading as="h3" size="md" color="gray.800">
                  {project.title}
                </Heading>
                <Text color="gray.600">
                  {project.description}
                </Text>
              </VStack>
            </CardBody>
            <CardFooter>
              <Link href="#" color="teal.500" fontWeight="bold">
                See more →
              </Link>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Projects;