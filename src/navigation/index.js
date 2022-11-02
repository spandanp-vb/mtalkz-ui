import React from 'react'
import * as Icon from 'react-feather'

const navigation = [

  
  {
    title: '',
    items: [
      {
        url: '/chatbots',
        icon: <Icon.MessageCircle size={20} />,
        title: 'Chatbot',
        items: []
      },
      {
        url: '/user',
        icon: <Icon.User size={20} />,
        title: 'User Management',
        items: []
      },
      {
        url: '/organization',
        icon: <Icon.Home size={20} />,
        title: 'Organization Management',
        items: []
      },
      {
        url: '/role',
        icon: <Icon.Flag size={20} />,
        title: 'Role Management',
        items: []
      },
      {
        url: '/permission',
        icon: <Icon.Key size={20} />,
        title: 'Permission Management',
        items: []
      },
      {
        url: '/channel',
        icon: <Icon.Speaker size={20} />,
        title: 'Channel Management',
        items: []
      },
      {
        url: '/resource',
        icon: <Icon.Grid size={20} />,
        title: 'Resource Management',
        items: []
      },

    ]
  },

]
export default navigation
