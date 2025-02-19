"use client" // Start of Client Component

import { Upload, FileText, AlertTriangle, Download, User, Menu } from 'lucide-react'
import styles from "./page.module.css"
// import { useState } from "react"

export default function ContractAnalysis() {
  return (
    <div className={styles.container}>
      
      {/* Start of Navbar Section */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>⚖️</span>
          LegalAI
        </div>
        <div className={`${styles.navLinks}`}>
          <a href="#" className={styles.navLink}>About</a>
          <a href="#" className={styles.navLink}>FAQs</a>
          <a href="#" className={styles.navLink}>Contact</a>
          <a href="#" className={styles.navLink}>Help</a>
        </div>
        <div className={styles.userProfile}>
          <User />
          <span>Khushi</span>
        </div>
      </nav>
      {/* End of Navbar Section */}

      {/* Start of Main Content Section */}
      <main className={styles.content}>
        <h1 className={styles.pageTitle}>Legal Contract Analysis</h1>

        <div className={styles.grid}>

          {/* Start of Upload Section */}
          <section className={styles.uploadSection}>
            <div className={styles.sectionHeader}>
              <Upload className={styles.icon} />
              <div>
                <h2>Upload Contract</h2>
                <p>Upload a legal contract for AI analysis</p>
              </div>
            </div>

            <div className={styles.uploadArea}>
              <input type="file" id="contract" className={styles.fileInput} />
              <label htmlFor="contract" className={styles.fileLabel}>
                <div className={styles.uploadIconWrapper}>
                  <FileText className={styles.uploadIcon} />
                </div>
                <span className={styles.uploadText}>
                  <strong>Choose a file</strong> or drag it here
                </span>
                <span className={styles.uploadHint}>Supports PDF, DOCX up to 10MB</span>
              </label>
            </div>

            <button className={styles.analyzeButton}>
              <span>Analyze Contract</span>
              <div className={styles.buttonShine}></div>
            </button>
          </section>
          {/* End of Upload Section */}

          {/* Start of Risk Analysis Section */}
          <section className={styles.analysisSection}>
            <div className={styles.sectionHeader}>
              <AlertTriangle className={styles.icon} />
              <div>
                <h2>Risk Analysis</h2>
                <p>AI-powered contract risk assessment</p>
              </div>
            </div>

            {/* Start of Risk Score Visualization */}
            <div className={styles.riskScore}>
              <div className={styles.scoreHeader}>
                <span>Risk Score</span>
                <span className={styles.riskLevel}>
                  {75 >= 80 ? "High Risk" : 75 >= 50 ? "Medium Risk" : "Low Risk"}
                </span>
              </div>
              <div className={styles.scoreVisual}>
                <div className={styles.scoreValue}>60</div>
                <div className={styles.scoreChart}>
                  <svg viewBox="0 0 36 36" className={styles.circleChart}>
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2.5"
                      strokeDasharray={`${(60 / 100) * 100}, 100`}
                      className={styles.progressArc}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#2563EB" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            {/* End of Risk Score Visualization */}

            {/* Start of Risk Factors */}
            <div className={styles.riskFactors}>
              <div className={styles.riskFactor}>
                <div className={styles.riskFactorHeader}>
                  <span>Liability Clauses</span>
                  <span className={styles.riskBadgeHigh}>High</span>
                </div>
                <div className={styles.riskBar}>
                  <div className={styles.riskProgress} style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className={styles.riskFactor}>
                <div className={styles.riskFactorHeader}>
                  <span>Payment Terms</span>
                  <span className={styles.riskBadgeMedium}>Medium</span>
                </div>
                <div className={styles.riskBar}>
                  <div className={styles.riskProgress} style={{ width: "60%" }}></div>
                </div>
              </div>
              <div className={styles.riskFactor}>
                <div className={styles.riskFactorHeader}>
                  <span>Termination Rights</span>
                  <span className={styles.riskBadgeLow}>Low</span>
                </div>
                <div className={styles.riskBar}>
                  <div className={styles.riskProgress} style={{ width: "35%" }}></div>
                </div>
              </div>
            </div>
            {/* End of Risk Factors */}
          </section>
          {/* End of Risk Analysis Section */}

          {/* Start of Key Clauses Section */}
          <section className={styles.clausesSection}>
            <div className={styles.sectionHeader}>
              <FileText className={styles.icon} />
              <div>
                <h2>Key Clauses</h2>
                <p>Important clauses and potential risks identified</p>
              </div>
            </div>

            <div className={styles.clausesList}>
              {/* Clause Item */}
              <div className={styles.clause}>
                <div className={styles.clauseHeader}>
                  <h3>Non-disclosure Agreement</h3>
                  <span className={styles.clauseBadge}>Critical</span>
                </div>
                <p>Standard confidentiality terms with moderate restrictions</p>
                <div className={styles.clauseActions}>
                  <button className={styles.clauseButton}>View Details</button>
                  <button className={styles.clauseButton}>Show Context</button>
                </div>
              </div>
              {/* End Clause Item */}
            </div>
          </section>
          {/* End of Key Clauses Section */}

          {/* Start of Summary Section */}
          <section className={styles.summarySection}>
            <div className={styles.sectionHeader}>
              <FileText className={styles.icon} />
              <div>
                <h2>Smart Summary</h2>
                <p>AI-generated contract summary and recommendations</p>
              </div>
            </div>

            <div className={styles.summaryContent}>
              <button className={styles.downloadButton}>
                <Download className={styles.downloadIcon} />
                Download Detailed Report
                <div className={styles.buttonShine}></div>
              </button>
            </div>
          </section>
          {/* End of Summary Section */}

        </div>
      </main>
      {/* End of Main Content Section */}

    </div>
  )
}

// End of Client Component
