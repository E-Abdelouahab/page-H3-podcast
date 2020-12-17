
using System;
using System.Text.RegularExpressions;
using System.Windows.Forms;


namespace GestAppts
{

    partial class GestAppt
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(GestAppt));
            this.Submit = new System.Windows.Forms.Button();
            this.Cancel = new System.Windows.Forms.Button();
            this.pc1 = new System.Windows.Forms.PictureBox();
            this.Nom = new System.Windows.Forms.Label();
            this.Prenom = new System.Windows.Forms.Label();
            this.DateDeNaissance = new System.Windows.Forms.Label();
            this.Tele = new System.Windows.Forms.Label();
            this.ChoixSpct = new System.Windows.Forms.Label();
            this.labelville = new System.Windows.Forms.Label();
            this.pays = new System.Windows.Forms.Label();
            this.email = new System.Windows.Forms.Label();
            this.ChoixSpct1 = new System.Windows.Forms.CheckBox();
            this.ChoixSpct2 = new System.Windows.Forms.CheckBox();
            this.ChoixSpct3 = new System.Windows.Forms.CheckBox();
            this.textBoxNom = new System.Windows.Forms.TextBox();
            this.textBoxPrenom = new System.Windows.Forms.TextBox();
            this.textBoxDateDeNaissance = new System.Windows.Forms.TextBox();
            this.textBoxTele = new System.Windows.Forms.TextBox();
            this.textBoxEmail = new System.Windows.Forms.TextBox();
            this.pc2 = new System.Windows.Forms.PictureBox();
            this.pc3 = new System.Windows.Forms.PictureBox();
            this.pc4 = new System.Windows.Forms.PictureBox();
            this.pc5 = new System.Windows.Forms.PictureBox();
            this.pc6 = new System.Windows.Forms.PictureBox();
            this.pc7 = new System.Windows.Forms.PictureBox();
            this.pc8 = new System.Windows.Forms.PictureBox();
            this.pc9 = new System.Windows.Forms.PictureBox();
            this.lblnom = new System.Windows.Forms.Label();
            this.lblprenom = new System.Windows.Forms.Label();
            this.lbldtnc = new System.Windows.Forms.Label();
            this.lbltele = new System.Windows.Forms.Label();
            this.lblmail = new System.Windows.Forms.Label();
            this.lblpays = new System.Windows.Forms.Label();
            this.lblville = new System.Windows.Forms.Label();
            this.lblchoix = new System.Windows.Forms.Label();
            this.cmbpays = new System.Windows.Forms.ComboBox();
            this.cmbville = new System.Windows.Forms.ComboBox();
            ((System.ComponentModel.ISupportInitialize)(this.pc1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pc2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pc3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pc4)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pc5)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pc6)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pc7)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pc8)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pc9)).BeginInit();
            this.SuspendLayout();
            // 
            // Submit
            // 
            this.Submit.BackColor = System.Drawing.Color.LimeGreen;
            this.Submit.Location = new System.Drawing.Point(1095, 434);
            this.Submit.Name = "Submit";
            this.Submit.Size = new System.Drawing.Size(75, 23);
            this.Submit.TabIndex = 0;
            this.Submit.Text = "Submit";
            this.Submit.UseVisualStyleBackColor = false;
            this.Submit.Click += new System.EventHandler(this.Submit_Click);
            // 
            // Cancel
            // 
            this.Cancel.BackColor = System.Drawing.Color.Khaki;
            this.Cancel.Location = new System.Drawing.Point(994, 434);
            this.Cancel.Name = "Cancel";
            this.Cancel.Size = new System.Drawing.Size(75, 23);
            this.Cancel.TabIndex = 1;
            this.Cancel.Text = "Cancel";
            this.Cancel.UseVisualStyleBackColor = false;
            this.Cancel.Click += new System.EventHandler(this.Cancel_Click);
            // 
            // pc1
            // 
            this.pc1.Image = ((System.Drawing.Image)(resources.GetObject("pc1.Image")));
            this.pc1.Location = new System.Drawing.Point(488, 12);
            this.pc1.Name = "pc1";
            this.pc1.Size = new System.Drawing.Size(268, 88);
            this.pc1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pc1.TabIndex = 2;
            this.pc1.TabStop = false;
            // 
            // Nom
            // 
            this.Nom.AutoSize = true;
            this.Nom.Location = new System.Drawing.Point(221, 145);
            this.Nom.Name = "Nom";
            this.Nom.Size = new System.Drawing.Size(40, 15);
            this.Nom.TabIndex = 3;
            this.Nom.Text = "Nom :";
            // 
            // Prenom
            // 
            this.Prenom.AutoSize = true;
            this.Prenom.Location = new System.Drawing.Point(221, 193);
            this.Prenom.Name = "Prenom";
            this.Prenom.Size = new System.Drawing.Size(56, 15);
            this.Prenom.TabIndex = 4;
            this.Prenom.Text = "Prénom :";
            // 
            // DateDeNaissance
            // 
            this.DateDeNaissance.AutoSize = true;
            this.DateDeNaissance.Location = new System.Drawing.Point(221, 244);
            this.DateDeNaissance.Name = "DateDeNaissance";
            this.DateDeNaissance.Size = new System.Drawing.Size(112, 15);
            this.DateDeNaissance.TabIndex = 5;
            this.DateDeNaissance.Text = "Date de naissance :";
            // 
            // Tele
            // 
            this.Tele.AutoSize = true;
            this.Tele.Location = new System.Drawing.Point(221, 304);
            this.Tele.Name = "Tele";
            this.Tele.Size = new System.Drawing.Size(69, 15);
            this.Tele.TabIndex = 6;
            this.Tele.Text = "Téléphone :";
            // 
            // ChoixSpct
            // 
            this.ChoixSpct.AutoSize = true;
            this.ChoixSpct.Font = new System.Drawing.Font("Roboto", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.ChoixSpct.ForeColor = System.Drawing.SystemColors.MenuHighlight;
            this.ChoixSpct.Location = new System.Drawing.Point(362, 351);
            this.ChoixSpct.Name = "ChoixSpct";
            this.ChoixSpct.Size = new System.Drawing.Size(149, 20);
            this.ChoixSpct.TabIndex = 10;
            this.ChoixSpct.Text = "Choix de spécialité :";
            // 
            // labelville
            // 
            this.labelville.AutoSize = true;
            this.labelville.Location = new System.Drawing.Point(779, 277);
            this.labelville.Name = "labelville";
            this.labelville.Size = new System.Drawing.Size(36, 15);
            this.labelville.TabIndex = 9;
            this.labelville.Text = "Ville :";
            this.labelville.Click += new System.EventHandler(this.label6_Click);
            // 
            // pays
            // 
            this.pays.AutoSize = true;
            this.pays.Location = new System.Drawing.Point(779, 226);
            this.pays.Name = "pays";
            this.pays.Size = new System.Drawing.Size(40, 15);
            this.pays.TabIndex = 8;
            this.pays.Text = "Pays :";
            this.pays.Click += new System.EventHandler(this.label7_Click);
            // 
            // email
            // 
            this.email.AutoSize = true;
            this.email.Location = new System.Drawing.Point(779, 178);
            this.email.Name = "email";
            this.email.Size = new System.Drawing.Size(89, 15);
            this.email.TabIndex = 7;
            this.email.Text = "Adresse email :";
            this.email.Click += new System.EventHandler(this.label8_Click);
            // 
            // ChoixSpct1
            // 
            this.ChoixSpct1.AutoSize = true;
            this.ChoixSpct1.Location = new System.Drawing.Point(392, 382);
            this.ChoixSpct1.Name = "ChoixSpct1";
            this.ChoixSpct1.Size = new System.Drawing.Size(67, 19);
            this.ChoixSpct1.TabIndex = 11;
            this.ChoixSpct1.Text = "Choix 1";
            this.ChoixSpct1.UseVisualStyleBackColor = true;
            // 
            // ChoixSpct2
            // 
            this.ChoixSpct2.AutoSize = true;
            this.ChoixSpct2.Location = new System.Drawing.Point(512, 382);
            this.ChoixSpct2.Name = "ChoixSpct2";
            this.ChoixSpct2.Size = new System.Drawing.Size(67, 19);
            this.ChoixSpct2.TabIndex = 12;
            this.ChoixSpct2.Text = "Choix 2";
            this.ChoixSpct2.UseVisualStyleBackColor = true;
            // 
            // ChoixSpct3
            // 
            this.ChoixSpct3.AutoSize = true;
            this.ChoixSpct3.Location = new System.Drawing.Point(638, 382);
            this.ChoixSpct3.Name = "ChoixSpct3";
            this.ChoixSpct3.Size = new System.Drawing.Size(67, 19);
            this.ChoixSpct3.TabIndex = 13;
            this.ChoixSpct3.Text = "Choix 3";
            this.ChoixSpct3.UseVisualStyleBackColor = true;
            // 
            // textBoxNom
            // 
            this.textBoxNom.Location = new System.Drawing.Point(312, 142);
            this.textBoxNom.Name = "textBoxNom";
            this.textBoxNom.Size = new System.Drawing.Size(149, 22);
            this.textBoxNom.TabIndex = 14;
            this.textBoxNom.TextChanged += new System.EventHandler(this.textBoxNom_TextChanged);
            // 
            // textBoxPrenom
            // 
            this.textBoxPrenom.Location = new System.Drawing.Point(312, 190);
            this.textBoxPrenom.Name = "textBoxPrenom";
            this.textBoxPrenom.Size = new System.Drawing.Size(149, 22);
            this.textBoxPrenom.TabIndex = 15;
            // 
            // textBoxDateDeNaissance
            // 
            this.textBoxDateDeNaissance.Location = new System.Drawing.Point(362, 241);
            this.textBoxDateDeNaissance.Name = "textBoxDateDeNaissance";
            this.textBoxDateDeNaissance.Size = new System.Drawing.Size(152, 22);
            this.textBoxDateDeNaissance.TabIndex = 16;
            // 
            // textBoxTele
            // 
            this.textBoxTele.Location = new System.Drawing.Point(312, 304);
            this.textBoxTele.Name = "textBoxTele";
            this.textBoxTele.Size = new System.Drawing.Size(149, 22);
            this.textBoxTele.TabIndex = 17;
            // 
            // textBoxEmail
            // 
            this.textBoxEmail.Location = new System.Drawing.Point(884, 175);
            this.textBoxEmail.Name = "textBoxEmail";
            this.textBoxEmail.Size = new System.Drawing.Size(169, 22);
            this.textBoxEmail.TabIndex = 18;
            // 
            // pc2
            // 
            this.pc2.Location = new System.Drawing.Point(467, 142);
            this.pc2.Name = "pc2";
            this.pc2.Size = new System.Drawing.Size(23, 22);
            this.pc2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pc2.TabIndex = 21;
            this.pc2.TabStop = false;
            // 
            // pc3
            // 
            this.pc3.Location = new System.Drawing.Point(467, 190);
            this.pc3.Name = "pc3";
            this.pc3.Size = new System.Drawing.Size(23, 22);
            this.pc3.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pc3.TabIndex = 22;
            this.pc3.TabStop = false;
            // 
            // pc4
            // 
            this.pc4.Location = new System.Drawing.Point(520, 241);
            this.pc4.Name = "pc4";
            this.pc4.Size = new System.Drawing.Size(23, 22);
            this.pc4.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pc4.TabIndex = 23;
            this.pc4.TabStop = false;
            // 
            // pc5
            // 
            this.pc5.Location = new System.Drawing.Point(467, 304);
            this.pc5.Name = "pc5";
            this.pc5.Size = new System.Drawing.Size(23, 22);
            this.pc5.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pc5.TabIndex = 24;
            this.pc5.TabStop = false;
            // 
            // pc6
            // 
            this.pc6.Location = new System.Drawing.Point(987, 274);
            this.pc6.Name = "pc6";
            this.pc6.Size = new System.Drawing.Size(23, 22);
            this.pc6.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pc6.TabIndex = 25;
            this.pc6.TabStop = false;
            // 
            // pc7
            // 
            this.pc7.Location = new System.Drawing.Point(987, 223);
            this.pc7.Name = "pc7";
            this.pc7.Size = new System.Drawing.Size(23, 22);
            this.pc7.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pc7.TabIndex = 26;
            this.pc7.TabStop = false;
            // 
            // pc8
            // 
            this.pc8.Location = new System.Drawing.Point(1059, 175);
            this.pc8.Name = "pc8";
            this.pc8.Size = new System.Drawing.Size(23, 22);
            this.pc8.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pc8.TabIndex = 27;
            this.pc8.TabStop = false;
            // 
            // pc9
            // 
            this.pc9.Location = new System.Drawing.Point(517, 351);
            this.pc9.Name = "pc9";
            this.pc9.Size = new System.Drawing.Size(23, 22);
            this.pc9.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pc9.TabIndex = 28;
            this.pc9.TabStop = false;
            // 
            // lblnom
            // 
            this.lblnom.AutoSize = true;
            this.lblnom.Font = new System.Drawing.Font("Roboto", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblnom.Location = new System.Drawing.Point(500, 145);
            this.lblnom.Name = "lblnom";
            this.lblnom.Size = new System.Drawing.Size(0, 17);
            this.lblnom.TabIndex = 29;
            // 
            // lblprenom
            // 
            this.lblprenom.AutoSize = true;
            this.lblprenom.Font = new System.Drawing.Font("Roboto", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblprenom.Location = new System.Drawing.Point(496, 192);
            this.lblprenom.Name = "lblprenom";
            this.lblprenom.Size = new System.Drawing.Size(0, 17);
            this.lblprenom.TabIndex = 30;
            // 
            // lbldtnc
            // 
            this.lbldtnc.AutoSize = true;
            this.lbldtnc.Font = new System.Drawing.Font("Roboto", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lbldtnc.Location = new System.Drawing.Point(549, 244);
            this.lbldtnc.Name = "lbldtnc";
            this.lbldtnc.Size = new System.Drawing.Size(0, 17);
            this.lbldtnc.TabIndex = 31;
            // 
            // lbltele
            // 
            this.lbltele.AutoSize = true;
            this.lbltele.Font = new System.Drawing.Font("Roboto", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lbltele.Location = new System.Drawing.Point(496, 306);
            this.lbltele.Name = "lbltele";
            this.lbltele.Size = new System.Drawing.Size(0, 17);
            this.lbltele.TabIndex = 32;
            // 
            // lblmail
            // 
            this.lblmail.AutoSize = true;
            this.lblmail.Font = new System.Drawing.Font("Roboto", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblmail.Location = new System.Drawing.Point(1088, 178);
            this.lblmail.Name = "lblmail";
            this.lblmail.Size = new System.Drawing.Size(0, 17);
            this.lblmail.TabIndex = 33;
            // 
            // lblpays
            // 
            this.lblpays.AutoSize = true;
            this.lblpays.Font = new System.Drawing.Font("Roboto", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblpays.Location = new System.Drawing.Point(1016, 226);
            this.lblpays.Name = "lblpays";
            this.lblpays.Size = new System.Drawing.Size(0, 17);
            this.lblpays.TabIndex = 34;
            // 
            // lblville
            // 
            this.lblville.AutoSize = true;
            this.lblville.Font = new System.Drawing.Font("Roboto", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblville.Location = new System.Drawing.Point(1016, 277);
            this.lblville.Name = "lblville";
            this.lblville.Size = new System.Drawing.Size(0, 17);
            this.lblville.TabIndex = 35;
            // 
            // lblchoix
            // 
            this.lblchoix.AutoSize = true;
            this.lblchoix.Font = new System.Drawing.Font("Roboto", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblchoix.Location = new System.Drawing.Point(549, 354);
            this.lblchoix.Name = "lblchoix";
            this.lblchoix.Size = new System.Drawing.Size(0, 17);
            this.lblchoix.TabIndex = 36;
            // 
            // cmbpays
            // 
            this.cmbpays.FormattingEnabled = true;
            this.cmbpays.Items.AddRange(new object[] {
            "MAROC",
            "USA",
            "FRANCE"});
            this.cmbpays.Location = new System.Drawing.Point(859, 223);
            this.cmbpays.Name = "cmbpays";
            this.cmbpays.Size = new System.Drawing.Size(121, 23);
            this.cmbpays.TabIndex = 37;
            this.cmbpays.SelectedIndexChanged += new System.EventHandler(this.cmbpays_SelectedIndexChanged);
            // 
            // cmbville
            // 
            this.cmbville.FormattingEnabled = true;
            this.cmbville.Location = new System.Drawing.Point(859, 269);
            this.cmbville.Name = "cmbville";
            this.cmbville.Size = new System.Drawing.Size(121, 23);
            this.cmbville.TabIndex = 38;
            // 
            // GestAppt
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.GradientInactiveCaption;
            this.ClientSize = new System.Drawing.Size(1192, 469);
            this.Controls.Add(this.cmbville);
            this.Controls.Add(this.cmbpays);
            this.Controls.Add(this.lblchoix);
            this.Controls.Add(this.lblville);
            this.Controls.Add(this.lblpays);
            this.Controls.Add(this.lblmail);
            this.Controls.Add(this.lbltele);
            this.Controls.Add(this.lbldtnc);
            this.Controls.Add(this.lblprenom);
            this.Controls.Add(this.lblnom);
            this.Controls.Add(this.pc9);
            this.Controls.Add(this.pc8);
            this.Controls.Add(this.pc7);
            this.Controls.Add(this.pc6);
            this.Controls.Add(this.pc5);
            this.Controls.Add(this.pc4);
            this.Controls.Add(this.pc3);
            this.Controls.Add(this.pc2);
            this.Controls.Add(this.textBoxEmail);
            this.Controls.Add(this.textBoxTele);
            this.Controls.Add(this.textBoxDateDeNaissance);
            this.Controls.Add(this.textBoxPrenom);
            this.Controls.Add(this.textBoxNom);
            this.Controls.Add(this.ChoixSpct3);
            this.Controls.Add(this.ChoixSpct2);
            this.Controls.Add(this.ChoixSpct1);
            this.Controls.Add(this.ChoixSpct);
            this.Controls.Add(this.labelville);
            this.Controls.Add(this.pays);
            this.Controls.Add(this.email);
            this.Controls.Add(this.Tele);
            this.Controls.Add(this.DateDeNaissance);
            this.Controls.Add(this.Prenom);
            this.Controls.Add(this.Nom);
            this.Controls.Add(this.pc1);
            this.Controls.Add(this.Cancel);
            this.Controls.Add(this.Submit);
            this.Font = new System.Drawing.Font("Roboto", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "GestAppt";
            this.Text = "Gest-Appts";
            this.Load += new System.EventHandler(this.GestAppt_Load);
            ((System.ComponentModel.ISupportInitialize)(this.pc1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pc2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pc3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pc4)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pc5)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pc6)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pc7)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pc8)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pc9)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion


        private System.Windows.Forms.PictureBox pc1;



        private System.Windows.Forms.Label Nom;
        private System.Windows.Forms.TextBox textBoxNom;
        private Label lblnom;
        private PictureBox pc2;



        private System.Windows.Forms.Label Prenom;
        private System.Windows.Forms.TextBox textBoxPrenom;
        private Label lblprenom;
        private PictureBox pc3;



        private System.Windows.Forms.Label DateDeNaissance;
        private System.Windows.Forms.TextBox textBoxDateDeNaissance;
        private Label lbldtnc;
        private PictureBox pc4;



        private System.Windows.Forms.Label Tele;
        private System.Windows.Forms.TextBox textBoxTele;
        private Label lbltele;
        private PictureBox pc5;



        private System.Windows.Forms.Label ChoixSpct;
        private System.Windows.Forms.CheckBox ChoixSpct1;
        private System.Windows.Forms.CheckBox ChoixSpct2;
        private System.Windows.Forms.CheckBox ChoixSpct3;
        private Label lblchoix;
        private PictureBox pc9;



        private System.Windows.Forms.Label labelville;
        private ComboBox cmbville;
        private Label lblville;
        private PictureBox pc6;



        private System.Windows.Forms.Label pays;
        private ComboBox cmbpays;
        private Label lblpays;
        private PictureBox pc7;



        private System.Windows.Forms.Label email;
        private System.Windows.Forms.TextBox textBoxEmail;
        private Label lblmail;
        private PictureBox pc8;



        private System.Windows.Forms.Button Submit;
        private System.Windows.Forms.Button Cancel;

    }


}


namespace RegualtExpression
{
    public partial class GestAppt : Form
    {


        private void button1_Click(object sender, EventArgs e)
        {


        }
    }
}