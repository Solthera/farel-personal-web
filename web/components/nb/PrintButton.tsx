'use client'

import { NbButton } from '@/components/nb/Button'
import { Download } from 'lucide-react'

export function PrintButton() {
  return (
    <NbButton variant="red" size="md" onClick={() => {
      const link = document.createElement('a')
      link.href = '/cv/cv.pdf'
      link.download = 'CV-Muhammad-Farel-Firdaus.pdf'
      link.click()
    }}>
      <Download size={16} /> Download PDF
    </NbButton>
  )
}
