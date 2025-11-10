// src/app/api/tickets/route.js

export async function GET(){
    const tickets =[
    {
       "id": 't-1001',
        "title": 'Cannot Connect to VPN',
        "description": 'User reports intermittent VPN connectivity errors.',
        "priority": 'High',
        "status": 'Open',
        "assignee": 'Unassigned',
        "updatedAt": '2025-10-31T14:05:00z'
    }
    ,
     {
       "id": 't-1002',
        "title": 'Wifi Connectivity',
        "description": "Wifi connection issues.",
        "priority": 'High',
        "status": 'Open',
        "assignee": 'Unassigned',
        "updatedAt": '2025-10-21T16:03:00z'
    }
    ,
     {
       "id": 't-1003',
        "title": 'Broken Keyboard',
        "description": 'Many keys are not working properly.',
        "priority": 'Low',
        "status": 'Resolved',
        "assignee": 'Unassigned',
        "updatedAt": '2025-10-14T11:05:00z'
    }
    ,
     {
       "id": 't-1004',
        "title": 'Login Issues',
        "description": 'User unable to login.',
        "priority": 'Medium',
        "status": 'In Progress',
        "assignee": 'Alondra',
        "updatedAt": '2025-10-21T20:01:00z'
    }
    ,
     {
       "id": 't-1005',
        "title": 'Unable to access shared folder',
        "description": 'User cannot open shared folder.',
        "priority": 'Low',
        "status": 'Open',
        "assignee": 'Unassigned',
        "updatedAt": '2025-10-35T18:12:00z'
    }
    ,
     {
       "id": 't-1006',
        "title": 'Password Reset',
        "description": 'User unable to reset password.',
        "priority": 'High',
        "status": 'Resolved',
        "assignee": 'Fabian',
        "updatedAt": '2025-10-31T14:05:00z'
    }
    ,
     {
       "id": 't-1007',
        "title": 'Power Outage',
        "description": 'Brief power outage reported in sector 1.',
        "priority": 'Critical',
        "status": 'Resolved',
        "assignee": 'Alondra',
        "updatedAt": '2025-10-11T18:02:00z'
    }
    ,
     {
       "id": 't-1008',
        "title": 'Portal Reset',
        "description": 'User needs to reset portal in order to login.',
        "priority": 'High',
        "status": 'On Hold',
        "assignee": 'Alexis',
        "updatedAt": '2025-10-01T14:11:00z'
    }
    ,
     {
       "id": 't-1009',
        "title": 'Laptop overheating',
        "description": 'User laptop gets very hot during use.',
        "priority": 'High',
        "status": 'On Hold',
        "assignee": 'Unassigned',
        "updatedAt": '2025-10-01T14:05:00z'
    }
    ,
     {
       "id": 't-1010',
        "title": 'Login renewal',
        "description": 'Must renew login license in order to login.',
        "priority": 'Medium',
        "status": 'On Hold',
        "assignee": 'Unassigned',
        "updatedAt": '2025-10-03T24:03:00z'
    }
    ,
     {
       "id": 't-1011',
        "title": 'Jammed Printer',
        "description": 'Office printer is jammed and needs to be cleared.',
        "priority": 'Low',
        "status": 'Open',
        "assignee": 'Unassigned',
        "updatedAt": '2025-10-19T11:45:00z'
    }
     ,
     {
       "id": 't-1012',
        "title": 'New software installation',
        "description": 'Request to install new software.',
        "priority": 'Medium',
        "status": 'Resolved',
        "assignee": 'Luz',
        "updatedAt": '2025-10-28T14:05:00z'
    }
];
return Response.json(tickets);
}
