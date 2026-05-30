"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

export type Project = {
  id: string
  name: string
  description: string
  category: string
  priority: string
  teamMembers: string[]
  progress: number
  status: string
}

export type TeamMember = {
  id: string
  name: string
  role: string
  email: string
  position: string
  birthdate: Date | string
  phone: string
  projectId: string
  isActive: boolean
}

export type Task = {
  id: string
  description: string
  projectId: string
  status: string
  priority: string
  userId: string
  dateline: Date | string
}

interface DashboardContextType {
  projects: Project[]
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>
  team: TeamMember[]
  setTeam: React.Dispatch<React.SetStateAction<TeamMember[]>>
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  settings: any
  setSettings: React.Dispatch<React.SetStateAction<any>>
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "E-commerce Platform",
      description: "Plataforma de comercio electrónico con Next.js",
      category: "web",
      priority: "high",
      teamMembers: ["1", "2"],
      progress: 65,
      status: "En progreso",
    },
  ])

  const [team, setTeam] = useState<TeamMember[]>([
    {
      id: "1",
      name: "María García",
      role: "Frontend Developer",
      email: "maria@example.com",
      position: "Senior",
      birthdate: "1990-05-15",
      phone: "555-0101",
      projectId: "1",
      isActive: true,
    },
    {
      id: "2",
      name: "Juan Pérez",
      role: "Backend Developer",
      email: "juan@example.com",
      position: "Mid",
      birthdate: "1992-08-20",
      phone: "555-0102",
      projectId: "1",
      isActive: true,
    },
  ])

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      description: "Implementar autenticación",
      projectId: "1",
      status: "En progreso",
      priority: "Alta",
      userId: "1",
      dateline: "2025-11-15",
    },
  ])

  const [settings, setSettings] = useState({ notifications: true, theme: "dark" })

  return (
    <DashboardContext.Provider value={{ projects, setProjects, team, setTeam, tasks, setTasks, settings, setSettings }}>
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboard() {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider")
  }
  return context
}
