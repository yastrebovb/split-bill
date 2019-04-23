import React from 'react'
import FriendsInput from '../../components/FriendsInput/FriendsInput'
import TipsInput from '../../components/TipsInput/TipsInput'
import BillInput from '../../components/BilInput/BillInput'
import styled from 'styled-components'

const EditPageWrap = styled.div`
  width: 96%;
  margin: 0 auto;
`

const EditPage = () => {
  return (
    <EditPageWrap>
      <FriendsInput />
      <TipsInput />
      <BillInput />
    </EditPageWrap>
  )
}

export default EditPage
