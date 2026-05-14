'use client'

import { NbButton } from '@/components/nb/Button'
import { Download } from 'lucide-react'

export function PrintButton() {
  return (
    <NbButton variant="red" size="md" onClick={() => window.print()}>
      <Download size={16} /> Download PDF
    </NbButton>
  )
}
