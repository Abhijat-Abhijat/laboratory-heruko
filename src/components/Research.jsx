import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import "../styles/research.scss";
// import img1 from "../assets/img1.jpg";
function Home() {
  return (
    <>
      <Header />
      <section>
        <div className="sections">
          <div className="sec1">
            <div className="last">
              <h1>Research Goals </h1>
              <p>
                At the laboratory of cancer biology, our team’s area of interest
                is the identification of non-invasive blood-based biomarkers for
                early diagnosis of esophageal cancer and functional analysis of
                significantly altered genes using gene silencing and proteomic
                approaches. The broad interest of our research group is to
                understand the molecular mechanism underlying esophageal
                carcinogenesis and develop strategies for early diagnosis and
                effective treatment of this disease. We hope to contribute
                towards advancements in treatment procedures by driving novel
                molecular insights.
              </p>
            </div>
            {/* <div className="right">
              <img src={img1} alt="" />
            </div> */}
          </div>
          <div className="sec1">
            <div className="last">
              <h1>
                Identification Of Markers Involved in the Progression Of
                Esophageal Cancer{" "}
              </h1>
              <p>
                Unraveling the role of MARCH E3 ligases and FGFRs in esophageal
                carcinogenesis Herein, for the first time, we report aberrant
                expression of membrane-associated RING-CH8 (MARCH8) in human
                esophageal squamous cell carcinoma. MARCH8 is a member of the
                recently discovered MARCH family of really interesting new genes
                (RING) E3 ligases. Though initial studies primarily focused on
                its immunomodulatory role, the newly discovered targets of this
                E3 ligase point towards its possible role in other biological
                processes such as embryogenesis and inhibition of apoptosis.
                However, its relevance in cancers is yet to be elucidated.
              </p>
            </div>
            
          </div>
          <div className="sec1">
          <div className="last">
              <h1>Chemoresistance In Esophageal Cancer</h1>
              <p>
                Role of non-coding RNAs (miRNAs and LncRNAs) Background &amp;
                objectives: Insidious symptomatology, late clinical presentation
                and poor prognosis of oesophageal cancer (EC) highlight the
                pressing need for novel non-invasive biomarkers for early tumour
                diagnosis and better prognosis. The present study was carried
                out to evaluate the clinical significance of circulating and
                tissue miR-144 expression in oesophageal cancer. Methods:
                Clinical significance of miR-144 expression was evaluated in
                preneoplastic (12) and neoplastic (35) oesophageal cancer
                tissues as well as matched distant non-malignant tissues using
                real-time PCR (qPCR). Circulating levels of miR-144 were also
                analyzed in serum samples of EC patients as well as normal
                individuals to determine the diagnostic potential of miR-144.
                Further, targets of miR-144 were predicted using bioinformatic
                tools and their gene ontology (GO) terms were assigned. Results:
                Real-time PCR analysis revealed significant upregulation of
                miR-144 in 29 of 35 (83%) EC tissues as compared to matched
                distant non-malignant tissues (P=0.010). a0 ll the dysplastic
                tissues showed upregulation of miR-144 as compared to their
                matched distant non-malignant tissues.
              </p>
            </div>
          </div>
          <div className="sec1">
            <div className="last">
              <h1>
                Identification Of Non-Invasive Blood-Based Biomarkers For Early
                Diagnosis Of Esophageal Cancer{" "}
              </h1>
              <p>
                Aim: To evaluate the diagnostic potential of a six microRNAs
                (miRNAs) panel consisting of miR-21, miR-144, miR-107, miR-342,
                miR-93 and miR-152 for esophageal cancer (EC) detection.
                Methods: The expression of miRNAs was analyzed in EC sera
                samples using quantitative real-time PCR. Risk score analysis
                was performed and linear regression models were then fitted to
                generate the six- miRNA panel. In addition, we made an effort to
                identify significantly dysregulated miRNAs and mRNAs in EC using
                the Cancer Genome Atlas (TCGA) miRNAseq and RNAseq datasets,
                respectively. Further, we identified significantly correlated
                miRNA-mRNA target pairs by integrating TCGA EC miRNAseq dataset
                with RNAseq dataset. Results: The panel of circulating miRNAs
                showed enhanced sensitivity (87.5%) and specificity (90.48%) in
                terms of discriminating EC patients from normal subjects (area
                under the curve [AUC] = 0.968). Pathway enrichment analysis for
                potential targets of six miRNAs revealed 48 significant (P &lt;
                0.05) pathways, viz. pathways in cancer, mRNA surveillance,
                MAPK, Wnt, mTOR signaling, and so on. The expression data for
                mRNAs and miRNAs, downloaded from TCGA database, lead to
                identification of 2309 differentially expressed genes and 189
                miRNAs. Gene ontology and pathway enrichment analysis showed
                that cell-cycle processes were most significantly enriched for
                differentially expressed mRNA. Integrated analysis of TCGA
                miRNAseq and RNAseq datasets resulted in identification of 53
                063 significantly and negatively correlated miRNA-mRNA pairs.
                Conclusion: In summary, a novel and highly sensitive signature
                of serum miRNAs was identified for EC detection
              </p>
            </div>
          </div>
        </div>
      </section>
      <Nav />
    </>
  );
}

export default Home;
