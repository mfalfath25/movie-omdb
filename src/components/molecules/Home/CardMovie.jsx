import { Image, Paper, Skeleton, Text, Title } from '@mantine/core'

import notfound from '../../../assets/images/notfound.jpg'

const CardMovie = ({ item, loading }) => {
  return (
    <>
      <Paper shadow="none" radius="md" sx={{ width: '240px', height: 'auto', minHeight: '420px' }}>
        <Skeleton visible={loading}>
          {item.Poster === 'N/A' ? (
            <Image width={240} height={320} radius="md" src={notfound} />
          ) : (
            <Image width={240} height={320} radius="md" src={item.Poster} />
          )}
        </Skeleton>
        {loading ? (
          <>
            <Skeleton height={14} mt={6} width="100%" radius="md" />
            <Skeleton height={14} mt={6} width="70%" radius="md" />
          </>
        ) : (
          <>
            <Title order={4} pt={4}>
              {item?.Title} {item?.Year ? `(${item?.Year})` : ''}
            </Title>
            <Text pt={2}>{item?.Type}</Text>
          </>
        )}
      </Paper>
    </>
  )
}

export default CardMovie
