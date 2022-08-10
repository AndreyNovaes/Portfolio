import { Skeleton, SkeletonCircle, SkeletonText, Spinner, Stack } from '@chakra-ui/react'


const SkeletonLoading = () => {
  return (
    <>
      <Stack spacing={4}>
        <SkeletonCircle />
        <SkeletonText />
        <Skeleton />
        <Spinner />
      </Stack>
    </>
  )
}
