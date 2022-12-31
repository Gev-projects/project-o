import '../styles/styles.less'
import { Paragraph } from '@atoms'
import { memo } from 'react'

type Props = {
  name: string,
  position: string,
  billiable: number,
}

export default memo(function Member(props: Props) {
  const { name, position, billiable } = props;

  return (
    <div className='member-card-container'>
      <div className='member-card'>
        <div>
          <Paragraph size='md'>{name}</Paragraph>
          <Paragraph size='sm' light>{position}</Paragraph>
        </div>
        <div>
          {
            billiable ?
              <Paragraph size='sm' bold>{`${billiable}`}</Paragraph>
              : <span className='non-bill'>Non bill</span>
          }
        </div>
      </div>
    </div>
  )
})