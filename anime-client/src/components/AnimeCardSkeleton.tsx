import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function AnimeCardSkeleton() {
  return (
    <Card width="300px">
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText />
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default AnimeCardSkeleton;
