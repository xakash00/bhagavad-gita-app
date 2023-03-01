import Ripple from '@/src/components/Ripple';
import { Margin, RippleCard, Text } from '@/src/Styles/HomeStyles';
import React from 'react'

const ChapterList = () => {
  return (
    <div className="container">
      <div className="row">
        {[...Array(18)].map((i, n) => {
          return (
            <div className="col-md-6 col-xl-4 col-sm-12">
              <RippleCard>
                <div className="d-flex">
                  <Text className="me-2" fsize="17px" w="500">
                    {n + 1}.
                  </Text>
                  <Text fsize="17px" w="500">
                    <div>Chapter {n + 1}</div>
                    <Margin />
                    <div>description</div>
                  </Text>
                </div>
                <Ripple/>
              </RippleCard>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ChapterList